let pageScripts;
/*
 * The "scripts" variable is not documented by Gatsby, https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody, and that is probably for a good
 * reason. The variable contains the scripts the Gatsby internals, https://github.com/gatsbyjs/gatsby/blob/d9cf5a21403c474846ebdf7a0508902b9b8a2ea9/packages/gatsby/cache-dir/static-entry.js#L270-L283,
 * puts into the head and post body. We will be relying on this undocumented variable until it does not work anymore as the alternative is
 * to read the webpack.stats.json file and parse it ourselves.
 *
 * @see https://github.com/itmayziii/gatsby-plugin-no-javascript/issues/17#issuecomment-809372048
 * @see https://gist.github.com/joaocarloscabral/1173496642a15772d13815126ee1dc73
 */
export function onRenderBody({ scripts }) {
  if (process.env.NODE_ENV !== 'production') { // During a gatsby development build (gatsby develop) we do nothing.
    return;
  }
  // TODO maybe we should not even wait and see if Gatsby removes this internal "script" variable and code around the issue if the variable is not there.
  if (!scripts) {
    throw new Error('gatsby-plugin-no-javascript: Gatsby removed an internal detail that this plugin relied upon, please submit this issue to https://www.github.com/itmayziii/gatsby-plugin-no-javascript.');
  }
  pageScripts = scripts;
}
// Here we rely on the fact that onPreRenderHTML is called after onRenderBody so we have access to the scripts Gatsby inserted into the HTML.
export function onPreRenderHTML({ getHeadComponents, pathname, replaceHeadComponents, getPostBodyComponents, replacePostBodyComponents }, pluginOptions) {
  if (process.env.NODE_ENV !== 'production' || checkPathExclusion(pathname, pluginOptions)) { // During a gatsby development build (gatsby develop) we do nothing.
    return;
  }
  replaceHeadComponents(getHeadComponentsNoJS(getHeadComponents(), pluginOptions));
  replacePostBodyComponents(getPostBodyComponentsNoJS(getPostBodyComponents(), pluginOptions));
}

function getHeadComponentsNoJS(headComponents, pluginOptions) {
  return headComponents.filter((headComponent) => {
    // Not a react component and therefore not a <script>.
    if (!isReactElement(headComponent)) {
      return true;
    }

    if (pluginOptions.excludeFiles && headComponent.props.href && RegExp(pluginOptions.excludeFiles).test(headComponent.props.href)) {
      return true;
    }
    // Gatsby puts JSON files in the head that should also be removed if javascript is removed, all these Gatsby files are in the
    // "/static" or /page-data directories.
    if (headComponent.props.href && (headComponent.props.href.startsWith(`${__PATH_PREFIX__}/static/`) || headComponent.props.href.startsWith(`${__PATH_PREFIX__}/page-data/`))) {
      return false;
    }

    return pageScripts.find((script) => {
      return headComponent.props.as === 'script' &&
        `${__PATH_PREFIX__}/${script.name}` === headComponent.props.href &&
        script.rel === headComponent.props.rel;
    }) === undefined;
  });
}
function getPostBodyComponentsNoJS(postBodyComponents, pluginOptions) {
  return postBodyComponents.filter((postBodyComponent) => {
    // Not a react component and therefore not a <script>.
    if (!isReactElement(postBodyComponent)) {
      return true;
    }
    if (pluginOptions.excludeFiles && postBodyComponent.props.src && RegExp(pluginOptions.excludeFiles).test(postBodyComponent.props.src)) {
      return true;
    }
    // These are special Gatsby files we are calling out specifically.
    if (postBodyComponent.props.id && (postBodyComponent.props.id === 'gatsby-script-loader' || postBodyComponent.props.id === 'gatsby-chunk-mapping')) {
      return false;
    }

    if (postBodyComponent.props.src?.indexOf('polyfill') > -1) {
      return false
    }

    return pageScripts.find((script) => {
      return postBodyComponent.type === 'script' && `${__PATH_PREFIX__}/${script.name}` === postBodyComponent.props.src
    }) === undefined;
  });
}
function isReactElement(reactNode) {
  return reactNode.props !== undefined;
}
function checkPathExclusion(pathname, pluginOptions) {
  if (!pluginOptions.excludePaths)
    return false;
  return RegExp(pluginOptions.excludePaths).test(pathname);
}

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';

import './reset.scss';
import './layout.scss';

const Layout = ({children}) => {
  return (
      <main className="content">
        {children}
      </main>
  );
};


export default Layout;

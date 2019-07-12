export function getIcon(name: string) {
  try {
    return require(`../images/${name}`)
  } catch (e) {
    console.warn(`Icon ${name} does not exist`);
    return ''
  }
}

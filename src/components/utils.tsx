import * as React from 'react';

export function getIcon(name: string) {
  try {
    return require(`../images/${name}`)
  } catch (e) {
    console.warn(`Icon ${name} does not exist`);
    return ''
  }
}

/**
 * Replaces every occurance of `**text**` to a `<strong>text</strong>`
 */
export function pseudoMarkdownToReact(value: string): React.ReactNode[] {
  const splittedValue = value.split('**');

  return splittedValue.map((piece, index) => {
    if (isEven(index)) {
      return <span key={index}>{piece}</span>
    }

    return <strong key={index}>{piece}</strong>
  })

}

export function isEven(value: number) {
  return value %2 === 0;
}

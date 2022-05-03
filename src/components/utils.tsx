import * as React from 'react';

export function getIcon(name: string) {
  if (!name) {
    return '';
  }

  try {
    return require(`../images/${name}`).default;
  } catch (e) {
    console.warn(`Icon ${name} does not exist`);
    return '';
  }
}

/**
 * Replaces every occurrence of `**text**` to a `<strong>text</strong>`
 */
export function pseudoMarkdownToReact(value: string): React.ReactNode[] {
  const splittedValue = removeDuplicatedWhiteSpaces(value).split('**');

  return splittedValue.map((piece, index) => {
    if (isEven(index)) {
      return <span key={index}>{piece}</span>;
    }

    return <strong key={index}>{piece}</strong>;
  });
}

export function isEven(value: number) {
  return value % 2 === 0;
}

export function removeDuplicatedWhiteSpaces(text: string): string {
  let s = text.trim().replace(/\s{2,}/g, ' ');
  return s;
}

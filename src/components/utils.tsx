import * as React from 'react';
import { Link } from './link';

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
 * Replaces every occurrence of:
 * * `**text**` to a `<strong>text</strong>`
 * * [text](url) to a `<a href="url">text</a>`
 */
export function pseudoMarkdownToReact(value: string): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  let i = 0;

  while (i < value.length) {
    if (value[i] === '*' && value[i + 1] === '*') {
      let j = i + 2;
      while (j < value.length && value[j] !== '*' && value[j + 1] !== '*') {
        j++;
      }

      result.push(<strong key={i}>{value.substring(i + 2, j)}</strong>);
      i = j + 2;
    } else if (value[i] === '[') {
      let j = i + 1;
      while (j < value.length && value[j] !== ']') {
        j++;
      }

      const text = value.substring(i + 1, j);
      const url = value.substring(j + 2, value.indexOf(')', j + 2));

      result.push(
        <Link href={url} key={i}>
          {text}
        </Link>
      );
      i = value.indexOf(')', j + 2) + 1;
    } else {
      result.push(value[i]);
      i++;
    }
  }

  return result;
}

export function removeDuplicatedWhiteSpaces(text: string): string {
  return text.trim().replace(/\s{2,}/g, ' ');
}

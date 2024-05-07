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

  /**
   * This function is used to combine the regular letters into a single string.
   * -- Without combining letters --
   * Input: 'Hello **world**'
   * Output: ['H', 'e', 'l', 'l', 'o', ' ', '<strong>world</strong>']
   * 
   * -- With combining letters --
   * Input: 'Hello **world**'
   * Output: ['Hello', '<strong>world</strong>']
   * 
   * Why?
   * When printing a page to pdf the pdf file size would skyrocket.
   * Without combining letters: 483 KB
   * With combining letters:  187 KB
   */
  const regularLetters: string[] = [];
  function combineLettersToString() {
    if (regularLetters.length > 0) {
      result.push(regularLetters.join(''));
      regularLetters.length = 0;
    }
  }

  while (i < value.length) {
    if (value[i] === '*' && value[i + 1] === '*') {
      combineLettersToString();
      let j = i + 2;
      while (j < value.length && value[j] !== '*' && value[j + 1] !== '*') {
        j++;
      }

      result.push(<strong key={i}>{value.substring(i + 2, j)}</strong>);
      i = j + 2;
    } else if (value[i] === '[') {
      combineLettersToString();
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
      regularLetters.push(value[i]);
      i++;
    }
  }
  combineLettersToString();

  return result;
}

export function removeDuplicatedWhiteSpaces(text: string): string {
  return text.trim().replace(/\s{2,}/g, ' ');
}

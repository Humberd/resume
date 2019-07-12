import * as React from 'react';

import './header.scss';

export interface HeaderProps {
  name: string;
  profession: string;
  description: string;
}

export const Header = (props: HeaderProps) => (
    <header className="header">
      <h1 className="name">{props.name}</h1>
      <p className="profession">{props.profession}</p>
      <p className="description">
        {pseudoMarkdownToReact(props.description)}
      </p>
    </header>
);


/**
 * Replaces every occurance of `**text**` to a `<strong>text</strong>`
 */
function pseudoMarkdownToReact(value: string): React.ReactNode[] {
  const splittedValue = value.split('**');

  return splittedValue.map((piece, index) => {
    if (isEven(index)) {
      return <span>{piece}</span>
    }

    return <strong>{piece}</strong>
  })

}

function isEven(value: number) {
  return value %2 === 0;
}

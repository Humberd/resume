import * as React from 'react';

import './header.scss';
import { pseudoMarkdownToReact } from './utils';

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



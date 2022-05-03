import * as React from 'react';

import './header.scss';
import { pseudoMarkdownToReact } from './utils';

export interface HeaderProps {
  name: string;
  downloadUrl: string;
  profession: string;
  description: string;
}

export const Header = (props: HeaderProps) => (
  <header className="header">
    <div className="main-header">
      <h1 className="name">{props.name}</h1>
      <a className="download" href={props.downloadUrl}>
        Download
      </a>
    </div>

    <h3 className="profession">{props.profession}</h3>
    <p className="description">{pseudoMarkdownToReact(props.description)}</p>
  </header>
);

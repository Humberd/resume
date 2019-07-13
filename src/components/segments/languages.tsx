import * as React from 'react';
import './languages.scss';
import { List } from '../list';
import { HorizontalSeparator } from '../horizontal-separator';

export interface LanguagesProps {
  entries: LanguageEntryProps[];
}

export const Languages = (props: LanguagesProps) => (
    <List>
      {props.entries.map(it => (
          <LanguageEntry {...it} key={it.name}/>
      ))}
    </List>
);

export interface LanguageEntryProps {
  name: string;
  level: string;
}

export const LanguageEntry = (props: LanguageEntryProps) => (
    <li className="language-entry">
      <span className="lang-name">{props.name}</span>
      <HorizontalSeparator/>
      <span>{props.level}</span>
    </li>
);

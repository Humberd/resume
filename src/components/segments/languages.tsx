import * as React from 'react';
import './languages.scss';
import { UnbreakableList } from '../unbreakableList';
import { HorizontalSeparator } from '../horizontal-separator';

export interface LanguagesProps {
  entries: LanguageEntryProps[];
}

export const Languages = (props: LanguagesProps) => (
  <UnbreakableList>
    {props.entries.map((it) => (
      <LanguageEntry {...it} key={it.name} />
    ))}
  </UnbreakableList>
);

export interface LanguageEntryProps {
  name: string;
  level: string;
}

export const LanguageEntry = (props: LanguageEntryProps) => (
  <li className="language-entry">
    <span className="lang-name">{props.name}</span>
    <HorizontalSeparator />
    <span>{props.level}</span>
  </li>
);

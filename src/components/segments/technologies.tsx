import * as React from 'react';
import './technologies.scss';
import { List } from '../list';

export interface TechnologiesProps {
  entries: TechnologyEntryProps[]
}

export const Technologies = (props: TechnologiesProps) => (
    <List>
      {props.entries.map(it => (
          <TechnologyEntry {...it} key={it.title}/>
      ))}
    </List>
);

export interface TechnologyEntryProps {
  title: string;
  technologies: string[];
}

export const TechnologyEntry = (props: TechnologyEntryProps) => (
    <li className="technology-entry">
      <p className="title">{props.title}</p>
      <p>{props.technologies.join(', ')}</p>
    </li>
);

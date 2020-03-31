import * as React from 'react';
import './technologies.scss';
import { UnbreakableSegments } from '../unbreakableSegments';

export interface TechnologiesProps {
  entries: TechnologyEntryProps[]
}

export const Technologies = (props: TechnologiesProps) => (
    <UnbreakableSegments>
      {props.entries.map(it => (
          <TechnologyEntry {...it} key={it.title}/>
      ))}
    </UnbreakableSegments>
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

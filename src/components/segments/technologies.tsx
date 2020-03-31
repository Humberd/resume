import * as React from 'react';
import './technologies.scss';
import { UnbreakableList } from '../unbreakableList';

export interface TechnologiesProps {
  entries: TechnologyEntryProps[]
}

export const Technologies = (props: TechnologiesProps) => (
    <UnbreakableList>
      {props.entries.map(it => (
          <TechnologyEntry {...it} key={it.title}/>
      ))}
    </UnbreakableList>
);

export interface TechnologyEntryProps {
  title: string;
  technologies: string[];
}

export const TechnologyEntry = (props: TechnologyEntryProps) => (
    <li className="technology-entry">
      <h4 className="title">{props.title}</h4>

      <ul
          className="list-of-technologies"
          aria-label={`List of ${props.title} technologies`}
      >
        {props.technologies.map((it, index) => (
            <li
                className="technology"
                key={it}
            >{it}{index < props.technologies.length ? ',' : ''}</li>
        ))}
      </ul>
    </li>
);

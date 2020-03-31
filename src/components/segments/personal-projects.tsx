import * as React from 'react';
import './personal-projects.scss';
import { UnbreakableSegments } from '../unbreakableSegments';
import { HorizontalSeparator } from '../horizontal-separator';

export interface PersonalProjectsProps {
  entries: PersonalProjectEntryProps[];
}

export const PersonalProjects = (props: PersonalProjectsProps) => (
    <UnbreakableSegments>
      {props.entries.map(it => (
          <PersonalProjectEntry {...it} key={it.name}/>
      ))}
    </UnbreakableSegments>
);

interface PersonalProjectEntryProps {
  name: string;
  href: string;
  technologies: string[];
  description: string;
}

const PersonalProjectEntry = (props: PersonalProjectEntryProps) => (
    <li className="personal-project-entry entries-group">
      <span className="name">{props.name}</span>
      <HorizontalSeparator/>
      <a
          className="project-link"
          href={props.href}
          target={'_blank'}
          rel="noopener noreferrer"
      >
        {props.href.replace('https://', '')}
      </a>
      <p className="technologies">{props.technologies.join(', ')}</p>
      <p className="description">{props.description}</p>
    </li>
);

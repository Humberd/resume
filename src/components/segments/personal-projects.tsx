import * as React from 'react';
import './personal-projects.scss';
import { UnbreakableList } from '../unbreakableList';
import { HorizontalSeparator } from '../horizontal-separator';

export interface PersonalProjectsProps {
  entries: PersonalProjectEntryProps[];
}

export const PersonalProjects = (props: PersonalProjectsProps) => (
  <UnbreakableList>
    {props.entries.map((it) => (
      <PersonalProjectEntry {...it} key={it.name} />
    ))}
  </UnbreakableList>
);

interface PersonalProjectEntryProps {
  name: string;
  href: string;
  technologies: string[];
  description: string;
}

const PersonalProjectEntry = (props: PersonalProjectEntryProps) => (
  <li className="personal-project-entry entries-group">
    <header className="personal-project-header-section">
      <h4 className="name">{props.name}</h4>
      <HorizontalSeparator />
      <a
        className="project-link"
        href={props.href}
        target={'_blank'}
        rel="noopener noreferrer"
      >
        {props.href.replace('https://', '')}
      </a>
    </header>
    <p className="technologies">[{props.technologies.join(', ')}]</p>
    <p className="description">{props.description}</p>
  </li>
);

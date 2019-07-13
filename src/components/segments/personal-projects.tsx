import * as React from 'react';
import './personal-projects.scss';
import { List } from '../list';

export interface PersonalProjectsProps {
  entries: PersonalProjectEntryProps[];
}

export const PersonalProjects = (props: PersonalProjectsProps) => (
    <List>
      {props.entries.map(it => (
          <PersonalProjectEntry {...it} key={it.name}/>
      ))}
    </List>
);

interface PersonalProjectEntryProps {
  name: string;
  href: string;
  technologies: string[];
  description: string;
}

const PersonalProjectEntry = (props: PersonalProjectEntryProps) => (
    <li className="personal-project-entry">
      <a
          className="name"
          href={props.href}
      >
        {props.name}
      </a>
      <p className="technologies">{props.technologies.join(', ')}</p>
      <p className="description">{props.description}</p>
    </li>
);

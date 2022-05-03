import * as React from 'react';
import './personal-info.scss';
import { getIcon } from '../utils';

export interface PersonalInfoProps {
  entries: PersonalInfoEntryProps[];
}

export const PersonalInfo = (props: PersonalInfoProps) => (
  <ul className="personal-info">
    {props.entries.map((it) => (
      <PersonalInfoEntry {...it} key={it.title} />
    ))}
  </ul>
);

export interface PersonalInfoEntryProps {
  title: string;
  icon: string;
  value: string;
  href: string;
}

const PersonalInfoEntry = (props: PersonalInfoEntryProps) => {
  return (
    <li className="personal-info-entry">
      <a
        href={props.href}
        target={props.href.startsWith('http') ? '_blank' : ''}
        rel="noopener noreferrer"
        className="link"
      >
        <img
          className="title-image"
          src={getIcon(props.icon)}
          aria-hidden={true}
          title={props.title}
        />
        <span>{props.value}</span>
      </a>
    </li>
  );
};

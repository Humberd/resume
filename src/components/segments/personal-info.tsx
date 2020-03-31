import * as React from 'react';
import './personal-info.scss';
import { getIcon } from '../utils';

export interface PersonalInfoProps {
  entries: PersonalInfoEntryProps[];
}

export const PersonalInfo = (props: PersonalInfoProps) => (
    <ul className="personal-info">
      {props.entries.map(it => (
          <PersonalInfoEntry{...it} key={it.title}/>
      ))}
    </ul>
);


export interface PersonalInfoEntryProps {
  title: string;
  icon?: string;
  value: string;
  href?: string;
}

const PersonalInfoEntry = (props: PersonalInfoEntryProps) => {
  let value: React.ReactNode;
  if (props.href) {
    value =
        <a
            href={props.href}
            target={props.href.startsWith('http') ? '_blank' : ''}
            rel="noopener noreferrer"
            aria-label={props.title}
        >{props.value}</a>;
  } else {
    value = <span>{props.value}</span>;
  }

  return (
      <li className="personal-info-entry">
        <label className="title">
          {props.icon && <img
              className="title-image"
              src={getIcon(props.icon)}
              aria-hidden={true}
          />}
          <p>{props.title}</p>
        </label>
        {value}
      </li>
  );
};

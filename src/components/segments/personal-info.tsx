import * as React from 'react';
import './personal-info.scss';

export interface PersonalInfoProps {
  info: SingleInfoProps[];
}

export const PersonalInfo = (props: PersonalInfoProps) => (
    <ul className="personal-info">
      {props.info.map(it => (
          <SingleInfo{...it} key={it.title}/>
      ))}
    </ul>
);


export interface SingleInfoProps {
  title: string;
  icon?: string;
  value: string;
  href?: string;
}

const SingleInfo = (props: SingleInfoProps) => {
  let value: React.ReactNode;
  if (props.href) {
    value =
        <a href={props.href} target={props.href.startsWith('mailto:') ? '' : '_blank'} rel="noopener noreferrer">{props.value}</a>;
  } else {
    value = <span>{props.value}</span>;
  }

  return (
      <li className="personal-info--single">
        <p className="title">{props.title}</p>
        {value}
      </li>
  );
};

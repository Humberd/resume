import * as React from 'react';
import './personal-info.scss';

export interface PersonalInfo {
  info: SingleInfo[];
}

export const PersonalInfo = (props: PersonalInfo) => (
    <ul className="personal-info">
      {props.info.map(it => (
          <SingleInfo{...it} key={it.title}/>
      ))}
    </ul>
);


export interface SingleInfo {
  title: string;
  icon?: string;
  value: string;
  href?: string;
}

const SingleInfo = (props: SingleInfo) => {
  let value: React.ReactNode;
  if (props.href) {
    value =
        <a href={props.href} target={props.href.startsWith('mailto:') ? '' : '_blank'} rel="noopener noreferrer">{props.value}</a>;
  } else {
    value = <span>{props.value}</span>;
  }

  return (
      <li className="personal-info--single">
        <div className="title">{props.title}</div>
        {value}
      </li>
  );
};

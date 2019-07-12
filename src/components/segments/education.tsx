import * as React from 'react';
import './education.scss';
import { DateEntry } from './date-entry';
import { List } from '../list';

export interface Education {
  entries: EducationEntry[];
}

export const Education = (props:Education) => (
    <List>
      {props.entries.map(it => (
          <EducationEntry {...it} key={it.date.from}/>
      ))}
    </List>
);

export interface EducationEntry {
  date: {
    from: string,
    to: string
  },
  degree: string,
  school: string
}

export const EducationEntry = (props: EducationEntry) => (
    <DateEntry date={props.date}>
      <div className="education-details">
        <div className="degree">{props.degree}</div>
        <div className="school">{props.school}</div>
      </div>
    </DateEntry>
)

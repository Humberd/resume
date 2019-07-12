import * as React from 'react';
import './education.scss';
import { DateEntry } from './date-entry';
import { List } from '../list';

export interface EducationProps {
  entries: EducationEntryProps[];
}

export const Education = (props: EducationProps) => (
    <List>
      {props.entries.map(it => (
          <EducationEntry {...it} key={it.date.from}/>
      ))}
    </List>
);

export interface EducationEntryProps {
  date: {
    from: string,
    to: string
  },
  degree: string,
  school: string
}

export const EducationEntry = (props: EducationEntryProps) => (
    <DateEntry date={props.date}>
      <div className="education-details">
        <p className="degree">{props.degree}</p>
        <p className="school">{props.school}</p>
      </div>
    </DateEntry>
);

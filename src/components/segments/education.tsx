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
    <div className="education-details entries-group">
      <DateEntry date={props.date}>
        <p className="degree">{props.degree}</p>
      </DateEntry>
      <p className="school">{props.school}</p>
    </div>
);

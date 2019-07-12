import * as React from 'react';
import './accomplishments.scss';
import { List } from '../list';
import { DateEntry } from './date-entry';

export interface AccomplishmentsProps {
  entries: AccomplishmentEntryProps[];
}

export const Accomplishments = (props: AccomplishmentsProps) => (
    <List>
      {props.entries.map(it => (
          <AccomplishmentEntry {...it} key={it.date + it.event}/>
      ))}
    </List>
);

export interface AccomplishmentEntryProps {
  date: string;
  event: string;
  places: string[];
}

const AccomplishmentEntry = (props: AccomplishmentEntryProps) => (
    <DateEntry date={{
      from: props.date,
      to: ''
    }}>
      <div className="accomplishment-details">
        <p className="event-name">{props.event}</p>
        <List>
          {props.places.map(it => (
              <li key={it}>- {it}</li>
          ))}
        </List>
      </div>
    </DateEntry>
);

import * as React from 'react';
import './accomplishments.scss';
import { UnbreakableList } from '../unbreakableList';
import { DateEntry } from './date-entry';
import { HorizontalSeparator } from '../horizontal-separator';

export interface AccomplishmentsProps {
  entries: AccomplishmentEntryProps[];
}

export const Accomplishments = (props: AccomplishmentsProps) => (
    <UnbreakableList>
      {props.entries.map(it => (
          <AccomplishmentEntry {...it} key={it.date + it.name}/>
      ))}
    </UnbreakableList>
);

export interface AccomplishmentEntryProps {
  name: string;
  date: string;
  description?: string;
  role?: string;
  places: string[];
}

const AccomplishmentEntry = (props: AccomplishmentEntryProps) => (
    <li className="accomplishment-details entries-group">
      <DateEntry
          date={{
            from: props.date,
          }}
      >
        <h4 className="name">{props.name}</h4>

        {props.role && (
            <>
              <HorizontalSeparator/>
              <span>{props.role}</span>
            </>
        )}
      </DateEntry>

      {props.description && <p className="description">{props.description}</p>}

      <UnbreakableList>
        {props.places.map(it => (
            <li key={it}>- {it}</li>
        ))}
      </UnbreakableList>
    </li>
);

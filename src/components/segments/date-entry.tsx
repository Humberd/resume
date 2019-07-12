import * as React from 'react';
import './date-entry.scss';


export interface DateEntryProps {
  date: {
    from: string,
    to: string;
  },
  children: React.ReactNode
}

export const DateEntry = (props: DateEntryProps) => (
    <li className="date-entry">
      <div className="date">
        <p className="date--from">{props.date.from} {props.date.to ? '-': ''}</p>
        <p className="date--to">{props.date.to}</p>
      </div>

      {props.children}
    </li>
);

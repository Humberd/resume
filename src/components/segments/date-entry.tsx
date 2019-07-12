import * as React from 'react';
import './date-entry.scss';


export interface DateEntry {
  date: {
    from: string,
    to: string;
  },
  children: React.ReactNode
}

export const DateEntry = (props: DateEntry) => (
    <li className="date-entry">
      <div className="date">
        <div className="date--from">{props.date.from} -</div>
        <div className="date--to">{props.date.to}</div>
      </div>

      {props.children}
    </li>
);

import * as React from 'react';
import './date-entry.scss';

export interface DateEntryProps {
  date: {
    from: string,
    to?: string;
  },
  children: React.ReactNode
}

export const DateEntry = (props: DateEntryProps) => (
    <header className="date-entry">
      {props.children}

      <div className="date">
        <span className="date--from">{props.date.from}</span>
        {props.date.to && (
            <>
              <span className="date--separator">-</span>
              <span className="date--to">{props.date.to}</span>
            </>
        )}
      </div>
    </header>
);

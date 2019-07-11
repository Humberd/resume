import * as React from 'react';

import './segment.scss';

export interface Segment {
  header: SegmentHeader,
  children: React.ReactNode
}

export const Segment = (props: Segment) => (
    <section className="segment">
      <SegmentHeader {...props.header}/>
      {props.children}
    </section>
);

export interface SegmentHeader {
  icon: string;
  title: string;
}

const SegmentHeader = (props: SegmentHeader) => (
    <header className="segment--header">
      <img
          className="icon"
          src={require(`../../images/${props.icon}`)}
      />
      <h1>{props.title}</h1>
    </header>
);

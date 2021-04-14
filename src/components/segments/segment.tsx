import * as React from "react"

import "./segment.scss"
import { getIcon } from "../utils"

export interface SegmentProps {
  header: SegmentHeaderProps,
  children: React.ReactNode
}

export const Segment = (props: SegmentProps) => (
    <section className="segment entries-group">
      <SegmentHeader {...props.header}/>
      {props.children}
    </section>
);

export interface SegmentHeaderProps {
  icon: string;
  title: string;
}

const SegmentHeader = (props: SegmentHeaderProps) => (
  <header className="segment--header">
    <div className="icon-wrapper">
      <img
        className="icon"
        src={getIcon(props.icon)}
        aria-hidden={true}
      />
    </div>
    <h2>{props.title}</h2>
    <div className="highlight-border"/>
  </header>
)

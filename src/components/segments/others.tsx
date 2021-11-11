import * as React from "react"
import "./others.scss"
import { UnbreakableList } from "../unbreakableList"
import { DateEntry } from "./date-entry"
import { HorizontalSeparator } from "../horizontal-separator"
import { removeDuplicatedWhiteSpaces } from "../utils"

export interface OthersProps {
  entries: OtherEntryProps[]
}

export const Others = (props: OthersProps) => {
  return (
      <UnbreakableList>
        {props.entries.map(entry => (
            <OtherEntry {...entry} key={entry.name}/>
        ))}
      </UnbreakableList>
  );
};

export interface OtherEntryProps {
  name: string;
  role: string;
  date: string;
  description: string;
}

export const OtherEntry = (props: OtherEntryProps) => {
  return (
      <li className="other-entry">
        <DateEntry
            date={{
              from: props.date,
            }}
        >
          <h4 className="name">{props.name}</h4>
          <HorizontalSeparator/>
          <span>{props.role}</span>
        </DateEntry>
        <p>{removeDuplicatedWhiteSpaces(props.description)}</p>
      </li>
  );
};

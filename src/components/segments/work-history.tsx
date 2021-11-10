import * as React from "react"
import "./work-history.scss"
import { UnbreakableList } from "../unbreakableList"
import { HorizontalSeparator } from "../horizontal-separator"
import { DateEntry } from "./date-entry"

export interface WorkHistoryProps {
  entries: WorkEntryProps[]
}

export const WorkHistory = (props: WorkHistoryProps) => (
    <div>
      {props.entries.map(it => (
          <WorkEntry {...it} key={it.date.from}/>
      ))}
    </div>
);

export interface WorkEntryProps {
  date: {
    from: string,
    to: string;
  },
  positions: string[];
  shortDescription?: string;
  company: string;
  projects: WorkProjectProps[];
}

const WorkEntry = (props: WorkEntryProps) => (
    <li className="work-details entries-group">
      <DateEntry date={props.date}>
        <h3 className="position">
          {props.positions.map((position, index)=> (
              <div key={position}>
                {position}
                {index !== props.positions.length - 1 && <span>,</span>}
              </div>
          ))}
        </h3>
        <span className="separator">-</span>
        <span className="company">{props.company}</span>
      </DateEntry>
      <p>{props.shortDescription}</p>

      {props.shortDescription && <h5 className="projects-header">Projects:</h5>}
      <UnbreakableList className="projects">
        {props.projects.map(it => (
            <WorkProject {...it} key={it.name}/>
        ))}
      </UnbreakableList>
    </li>
);

export interface WorkProjectProps {
  name: string;
  technologies: string[];
  position: string;
  description: string;
}

const WorkProject = (props: WorkProjectProps) => (
    <li className="work-project">
      <span className="project-name">{props.name}</span>
      <HorizontalSeparator/>
      <span className="project-position">{props.position}</span>
      <p className="project-technologies">{props.technologies.join(', ')}</p>
      <p className="project-description">{props.description}</p>
    </li>
);

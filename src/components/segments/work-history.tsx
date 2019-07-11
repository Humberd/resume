import * as React from 'react';
import './work-history.scss';

export interface WorkHistory {
  history: WorkEntry[]
}

export const WorkHistory = (props: WorkHistory) => (
    <ul className="work-history">
      {props.history.map(it => (
          <WorkEntry {...it}/>
      ))}
    </ul>
);

export interface WorkEntry {
  date: {
    from: string,
    to: string;
  },
  position: string;
  company: string;
  projects: WorkProject[];
}

const WorkEntry = (props: WorkEntry) => (
    <li className="work-history--entry">
      <div className="date">
        <div className="date--from">{props.date.from} -</div>
        <div className="date--to">{props.date.to}</div>
      </div>

      <div className="work-description">
        <div className="position">{props.position}</div>
        <div className="company">{props.company}</div>
        <ul>
          {props.projects.map(it => (
              <WorkProject {...it}/>
          ))}
        </ul>
      </div>
    </li>
);

export interface WorkProject {
  name: string;
  technologies: string[];
  description: string;
}

const WorkProject = (process: WorkProject) => (
    <li>
      <div className="name"></div>
    </li>
);

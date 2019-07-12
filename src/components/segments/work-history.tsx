import * as React from 'react';
import './work-history.scss';

export interface WorkHistory {
  history: WorkEntry[]
}

export const WorkHistory = (props: WorkHistory) => (
    <ul className="work-history">
      {props.history.map(it => (
          <WorkEntry {...it} key={it.date.from}/>
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
    <li className="work-entry">
      <div className="date">
        <div className="date--from">{props.date.from} -</div>
        <div className="date--to">{props.date.to}</div>
      </div>

      <div className="details">
        <div className="position">{props.position}</div>
        <div className="company">{props.company}</div>
        <ul className="projects">
          {props.projects.map(it => (
              <WorkProject {...it} key={it.name}/>
          ))}
        </ul>
      </div>
    </li>
);

export interface WorkProject {
  name: string;
  technologies: string[];
  position: string;
  description: string;
}

const WorkProject = (props: WorkProject) => (
    <li className="work-project">
      <span className="project-name">{props.name}</span>
      <span className="project-separator">&#9679;</span>
      <span className="project-position">{props.position}</span>
      <div className="project-technologies">{props.technologies.join(', ')}</div>
      <div className="project-description">{props.description}</div>
    </li>
);

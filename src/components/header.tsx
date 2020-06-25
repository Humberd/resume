import * as React from "react"

import "./header.scss"
import { pseudoMarkdownToReact } from "./utils"

export interface HeaderProps {
  name: string;
  profession: string;
  description: string;
}

export const Header = (props: HeaderProps) => (
    <header className="header">

      <div className="main-header">
        <h1 className="name">{props.name}</h1>
        <button className="download">Download</button>
      </div>

      <p className="profession">{props.profession}</p>
      <p className="description">
        {pseudoMarkdownToReact(props.description)}
      </p>
    </header>
);



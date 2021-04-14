import * as React from "react"

import "./header.scss"
import { getIcon, pseudoMarkdownToReact } from "./utils"

export interface HeaderProps {
  name: string;
  downloadUrl: string;
  profession: string;
  description: string;
}

export const Header = (props: HeaderProps) => (
    <header className="header">

      <div className="main-header">
        <h1 className="name">{props.name}</h1>
        <span className="aka">(aka Master Sawik#EUW)</span>
        <img className="logo" src={getIcon("riot-logo.png")}/>
        {/*<a className="download" href={props.downloadUrl}>Download</a>*/}
      </div>

      <h3 className="profession">{props.profession}</h3>
      <p className="description">
        {pseudoMarkdownToReact(props.description)}
      </p>

      <p className="description" style={{marginTop: "10px"}}>
        {pseudoMarkdownToReact("**In summary: The League Client is bugged. I want to fix it myself.**")}
      </p>
    </header>
);



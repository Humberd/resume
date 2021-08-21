import * as React from "react"
import { UnbreakableList } from "../unbreakableList"

export interface EnjoymentsProps {
  entries: string[]
}

export const Enjoyments = (props: EnjoymentsProps) => (
  <UnbreakableList>
    {props.entries.join(', ')}
  </UnbreakableList>
)

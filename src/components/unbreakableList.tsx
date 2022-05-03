import * as React from 'react';
import './list.scss';

export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Ensures that every item on the list is not
 * split between 2 pages when printing to pdf
 */
export const UnbreakableList = (props: ListProps) => (
  <ul className={'generic-list ' + (props.className || '')}>
    {props.children}
  </ul>
);

import * as React from 'react';
import './link.scss';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <a
      className={`app-link ${props.className || ''}`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

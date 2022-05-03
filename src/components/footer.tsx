import * as React from 'react';
import './footer.scss';

export interface FooterProps {
  consent: string;
}

export const Footer = (props: FooterProps) => (
  <p className="footer-consent">{props.consent}</p>
);

import React from 'react';

import './segment.scss';
import svg from '../images/person.svg';

export const Segment = () => (
    <section className="segment">
        <SegmentHeader/>
    </section>
);

export const SegmentHeader = async () => {

  return (
      <header className="segment--header">
    <img src={svg} alt=""/>
    <h1>Personal Info</h1>
  </header>
)};

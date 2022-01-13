import React from 'react';
import TimelineElement from './Timeline';
import './Content.scss';

const About: React.FC = () => {
  return (
    <div className="page-about">
      <div className="about-info">
        <section>Info</section>
        <section>Skills</section>
      </div>
      <div className="about-timeline">
        <TimelineElement />
      </div>
    </div>
  );
};

export default About;

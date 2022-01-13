import React from 'react';
import Timeline from './Timeline';
import './Content.scss';

const About: React.FC = () => {
  return (
    <div className="page-about">
      <div className="about-timeline">
        <Timeline />
      </div>
      <div className="about-info">
        <section>Info</section>
        <section>Skills</section>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './Navigation.scss';

const Side: React.FC = () => {
  return (
    <section className="page-left">
      <a href="https://www.linkedin.com/in/mariana-pereira-5b3851156/" className="left-links" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} className="links-icon"/>
      </a>
      <a href="https://github.com/MarianaPereira23" className="left-links" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} className="links-icon"/>
      </a>
    </section>
  );
};

export default Side;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

const Side: React.FC = () => {
  return (
    <section className="page-left">
      <a href="" className="left-links" target="_blank">
        <FontAwesomeIcon icon={faFilePdf} className="links-icon"/>
      </a>
      <a href="" className="left-links" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} className="links-icon"/>
      </a>
      <a href="" className="left-links" target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} className="links-icon"/>
      </a>
    </section>
  );
};

export default Side;

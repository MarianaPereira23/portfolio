import React from 'react';
import Mariana from '../../media/images/Mariana.png';
import './Content.scss';

const Home: React.FC = () => {
  return (
    <div className="page-home">
      <h1 className="home-title">Hi, <br/>I'm Mariana!</h1>
      <img className="home-image" src={Mariana} alt="Mariana" />
    </div>
  );
};

export default Home;

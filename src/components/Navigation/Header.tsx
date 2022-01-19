import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.scss';

const Header: React.FC = () => {
  return (
    <header className="page-header">
      <Link to="/portfolio/" className="header-link"><h1 className="header-title">Mariana Pereira</h1></Link>
      <nav className="header-navigation">
        <NavLink to="/portfolio/about" className="header-link navigation-item">About</NavLink>
        <NavLink to="/portfolio/projects" className="header-link navigation-item">Projects</NavLink>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';


const Header = () => {
  return (
    <header className="wrkt-header">
      <NavLink
        exact
        activeClassName="active-nav-link"
        to="/"
      >
        Goal List
      </NavLink>
      <NavLink
        activeClassName="active-nav-link"
        to="/goal"
      >
        Goal
      </NavLink>
    </header>
  )
};


export default Header;

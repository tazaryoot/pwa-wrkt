import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';


const Header = () => {
  return (
    <header>
      <NavLink activeClassName="active" to="/">exerciseList</NavLink>
      <NavLink activeClassName="active" to="/exercise">exercise</NavLink>
    </header>
  )
};


export default Header;

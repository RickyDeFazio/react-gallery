import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Nav = ({ buttonClick }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li onClick={() => buttonClick('cats')}><NavLink to="/cats">Cats</NavLink></li>
        <li onClick={() => buttonClick('dogs')}><NavLink to="/dogs">Dogs</NavLink></li>
        <li onClick={() => buttonClick('birds')}><NavLink to="/birds">Birds</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
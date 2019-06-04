import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li onClick={() => props.handleButton('cats')}><NavLink to="/cats">Cats</NavLink></li>
        <li onClick={() => props.handleButton('dogs')}><NavLink to="/dogs">Dogs</NavLink></li>
        <li onClick={() => props.handleButton('birds')}><NavLink to="/birds">Birds</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from './Context';
 
const Nav = () => {
  return (
    <Consumer>
      {context => (
        <nav className="main-nav">
          <ul>
            <li onClick={() => context.actions.nav('cats')}><NavLink to="/cats">Cats</NavLink></li>
            <li onClick={() => context.actions.nav('dogs')}><NavLink to="/dogs">Dogs</NavLink></li>
            <li onClick={() => context.actions.nav('birds')}><NavLink to="/birds">Birds</NavLink></li>
          </ul>
        </nav>
      )}
    </Consumer>
  );
}

export default Nav;
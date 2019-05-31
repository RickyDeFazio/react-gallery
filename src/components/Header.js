import React from 'react';
import Search from './Search';
import Nav from './Nav';

const Header = (props) => {
  return (
    <header>
      <Search />
      <Nav />
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
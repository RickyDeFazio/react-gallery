import React from 'react';
import Search from './Search';
import Nav from './Nav';
import Title from './Title';

const Header = (props) => {
  return (
    <header>
      <Search />
      <Nav />
      <Title title={props.title}/> 
    </header>
  );
}

export default Header;
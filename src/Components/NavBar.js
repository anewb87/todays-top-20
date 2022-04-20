import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../Styling/NavBar.scss'

const NavBar = ({ searchArticles }) => {
  let { pathname } = useLocation();
  let navLink;
  let searchBar;
  let id = parseInt(pathname.slice(9))

  const linkStyleOne = {
    textDecoration: 'none',
    fontFamily: 'Major Mono Display',
    color: 'white',
    fontSize: '2em',
  };

  const linkStyleTwo = {
    // textDecoration: 'none',
    color: 'white',
    fontSize: '1.5em',
  };

  if (pathname === `/article/${id}`) {
    navLink = <Link className="nav-link" style={linkStyleTwo} to='/'>Back to Home</Link>;
    searchBar = null;
  } else {
    navLink = null;
    searchBar = <SearchBar searchArticles={searchArticles}/>
  }

  return (
    <header className='nav-bar'>
      <Link to='/' style={linkStyleOne}>Today's Top 20-ish</Link>
      {navLink}
      {searchBar}
    </header>
  )
}

export default NavBar
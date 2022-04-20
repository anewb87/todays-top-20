import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = ({ searchArticles }) => {
  let { pathname } = useLocation();
  let navLink;
  let searchBar;
  let id = parseInt(pathname.slice(9))

  const linkStyle = {
    textDecoration: 'none',
  };

  if (pathname === `/article/${id}`) {
    navLink = <Link className="nav-link" style={linkStyle} to='/'>Back to Home</Link>;
    searchBar = null;
  } else {
    navLink = null;
    searchBar = <SearchBar searchArticles={searchArticles}/>
  }

  return (
    <header className='nav-bar'>
      <Link to='/' style={linkStyle}>Today's Top 20-ish</Link>
      {navLink}
      {searchBar}
    </header>
  )
}

export default NavBar
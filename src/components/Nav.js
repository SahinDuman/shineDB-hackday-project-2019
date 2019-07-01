import React from 'react';
import {Link } from "react-router-dom";

function Nav(props) {

  return (
    <header className="header">
      <Link to="/"><h1 id="logo">Shine<span className="logo-accent">DB</span></h1></Link>

      <nav>
        <a href="#a" id="menu-icon"></a>

        <ul>
          <li className="nav-links">
            <Link to="/" className="current">Home</Link>
          </li>
          <li className="nav-links">
            <Link to="/categories">Categories(Upcoming)</Link>
          </li>
          <li className="nav-links">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-links">
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

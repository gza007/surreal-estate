import React from 'react';
import '../styles/navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faSign);

const NavBar = () => (
  <div className="navBar">
    <div className="icon">
      <FontAwesomeIcon
        className="icon-logo"
        icon="sign"
      />
      Surreal Estate
    </div>
    <ul className="nav">
      <Link className="item" to="/">View Properties</Link>
      <Link className="item" to="/add-property">Add a Property</Link>
    </ul>
  </div>
);

export default NavBar;

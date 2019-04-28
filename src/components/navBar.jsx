import React from 'react';
import '../styles/navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign } from '@fortawesome/free-solid-svg-icons';

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
      <li className="item">View Properties</li>
      <li className="item">Add a Property</li>
    </ul>
  </div>
);

export default NavBar;

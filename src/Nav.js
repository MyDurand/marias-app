import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>      
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#reservations">Reservations</a></li>
      <li><a href="#order">Order Online</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
  </nav>
);


export default Nav;
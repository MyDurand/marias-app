import React from 'react';
import './Header.css';
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <img src="/Logo.svg" alt="Logo" className="logo" />
            <Nav />
        </header>
    );
}


export default Header;
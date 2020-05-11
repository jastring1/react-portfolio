import React from 'react';
import './Nav.css';
import NavItem from '../NavItem/NavItem'
import data from '../../data.json'

function Nav() {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <h1 id="userName">
                    {data.userName}
                </h1>
            </div>
            <ul className="menu nav-menu">
                <li><NavItem label="Home" /></li>
                <li><NavItem label="About" /></li>
                <li><NavItem label="Portfolio" /></li>
                <li><NavItem label="Contact" /></li>
            </ul>
        </div>


    );
}

export default Nav;


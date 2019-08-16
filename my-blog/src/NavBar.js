import React, { Component }  from 'react';

//---with react router we don't normaly use anchor tag instead we use link
//--now i import the link--
import {Link} from 'react-router-dom';

const NavBar = ()=>(
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/article-list">Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
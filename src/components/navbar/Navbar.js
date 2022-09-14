import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return <>
    <nav className='navbar'>
       <div className='nav-container '>
        <NavLink exact to='/' className='nav-logo'>
            Codebucks
        </NavLink>
       </div>
    </nav>
    
    </>;
}

export default NavBar;
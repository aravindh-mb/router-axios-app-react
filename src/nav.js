import React from 'react'
import {Link} from 'react-router-dom'
import './App.css';

function Nav() {
    const stylelink={
        color:'white'
    }
  return (
      <nav>
        <h3>webdevfrondend</h3>
        <ul className="nav-links">
            <li >
                <Link style={stylelink} to='/about'>About</Link>
            </li>
            <li>
                <Link style={stylelink} to='/shop'>Shop</Link>
            </li>
        </ul>
      </nav>
   
  );
}

export default Nav;

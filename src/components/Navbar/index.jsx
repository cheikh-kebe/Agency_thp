import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/works'>Works</Link></li>
      </ul>
    </div>
  )
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Headers.css'

function Headers() {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/auth" className='nav-link'>Login</NavLink></li>
                <li><NavLink to="/profile" className='nav-link'>Profile</NavLink></li>
                <li><button className='logout' type='button'>Logout</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Headers

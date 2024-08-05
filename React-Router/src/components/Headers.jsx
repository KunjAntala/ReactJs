import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Headers.css'

function Headers() {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/home" className='nav-link' activeClassName='active'>Home</NavLink></li>
                <li><NavLink to="/users" className='nav-link' activeClassName='active'>User</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Headers

import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Headers.css'
import AuthContext from './store/auth-store'

function Headers() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  const logoutHandler = () => {
    console.log('Logout Sucessfully');
    authContext.Logout()
    navigate('/auth')
  }
  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/auth" className='nav-link'>Login</Link></li>
                <li><Link to="/profile" className='nav-link'>Profile</Link></li>
                <li><button className='logout' type='button' onClick={logoutHandler}>Logout</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Headers

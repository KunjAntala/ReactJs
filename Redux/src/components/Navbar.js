import React from 'react'
import { useSelector } from 'react-redux'
import cart from '../assets/shopping-bag.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/signup'>Sign up</Link>
              </li>
            </ul>
            <div className='cart'>
              <Link to='/cart'><img src={cart} height='30px' width='30px'/></Link>
              <p>{cartItems.length}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

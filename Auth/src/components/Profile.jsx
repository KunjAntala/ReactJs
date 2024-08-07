import React, { useContext, useRef } from 'react'
import './Profile.css'
import AuthContext from './store/auth-store'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const authContext = useContext(AuthContext)
  const inputRef = useRef()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Token',authContext);
    
    const newPassword = inputRef.current.value
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA01eSDCWkZB6Hpyrfgs4NgkQbO6ZWMCXY',
      {
        method: 'POST',
        body: JSON.stringify({ 'idToken': authContext.Token,'password': newPassword, 'returnSecureToken': false }),
        headers: { 'content-type': 'application/json' }
      }).then((res) => {
        console.log('Password Changed Successfully',res);
        navigate('/auth')
      })
  }

  return (
    <div className='profile'>
      <form className='auth' onSubmit={submitHandler}>
        <h2>Change Password</h2>
        <div className="input-group">
            <label htmlFor="new-password">New Password:</label>
            <input type="password" ref={inputRef} id='new-password' />
        </div>
        <div className="change-pass">
            <button type='submit'>Change Password</button>
        </div>
      </form>
    </div>
  )
}

export default Profile

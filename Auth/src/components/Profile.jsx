import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div className='profile'>
      <form className='auth'>
        <div className="input-group">
            <label htmlFor="new-password">New Password</label>
            <input type="password" id='new-password' />
        </div>
        <div className="change-pass">
            <button>Change Password</button>
        </div>
      </form>
    </div>
  )
}

export default Profile

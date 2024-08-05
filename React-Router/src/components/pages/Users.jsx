import React from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

function Users() {
  return (
    <div>
      <h1>List of Users</h1>
        <ul>
          <li><Link to='/users/Kunj1' className='user-details'>Kunj 1</Link></li>
          <li><Link to='/users/Kunj2' className='user-details'>Kunj 2</Link></li>
          <li><Link to='/users/Kunj3' className='user-details'>Kunj 3</Link></li>
        </ul>
    </div>
  )
}

export default Users

import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams()
    console.log('user ID',params.userID);
    
  return (
    <div>
      <h1>User Details</h1>
    </div>
  )
}

export default UserDetails

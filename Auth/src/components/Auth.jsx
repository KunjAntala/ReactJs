import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import './Auth.css'
import AuthContext from './store/auth-store'

function Auth() {
  const authContext = useContext(AuthContext)
  const [loginToggle, setLoginToggle] = useState(true)
  const emailRef = useRef('')
  const passwordRef = useRef('')
  
  const toggleHandler = () => {
    setLoginToggle((prevState) => !prevState)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const emailInput = emailRef.current.value
    const passwordInput = passwordRef.current.value
    
      let url 
      if(loginToggle){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA01eSDCWkZB6Hpyrfgs4NgkQbO6ZWMCXY'
      }
      else{
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA01eSDCWkZB6Hpyrfgs4NgkQbO6ZWMCXY'
      }
      fetch(url,
        {
          method: 'POST',
          body: JSON.stringify({ 'email': emailInput, 'password': passwordInput, returnSecureToken: true }),
          headers: { 'content-type': 'application/json' }
        }).then((response) => {
          console.log(response)
          if (response.ok) {
            return response.json()
          }
          else {
            return response.json().then(data => {
              let message = 'Authentication Failed'
              if (data && data.error && data.error.message) {
                message = data.error.message
              }
              throw new Error(message)
            })
          }
        })
        .then((data) => {
          authContext.login(data.idToken)
          console.log('Sign Up Successfully',data)})
        .catch((error) => {alert(error)})
  }

  return (
    <div className='app'>
      <form onSubmit={submitHandler} className='login'>
        <div>
          <h2>{loginToggle ? 'Login' : 'Sign Up'}</h2>
        </div>
        <div className="user-email">
          <label htmlFor="email">Email:</label>
          <input type="text" id='email' ref={emailRef} required />
        </div>
        <div className="user-pass">
          <label htmlFor="password">Password:</label>
          <input type="password" id='password' ref={passwordRef} required />
        </div>
        <div className="actions">
          <button type='submit'>{loginToggle ? 'Login' : 'Sign Up'}</button>
          <button type='button' onClick={toggleHandler}>{!loginToggle ? 'Login' : 'Sign Up'}</button>
        </div>
      </form>
    </div>
  )
}

export default Auth

import React, { useEffect, useRef, useState } from 'react'
import useInput from '../hooks/use-input'

function SimpleInput(props) {

  const { input: enteredNameInput, inputIsValid: nameIsValid,
    inputIsInValid: nameIsInValid, changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler, reset: nameReset } = useInput(value => value)

  const { input: enteredEmailInput, inputIsValid: emailIsValid,
    inputIsInValid: emailIsInValid, changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler, reset: emailReset } = useInput(value => value)

  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    if (nameIsValid && emailIsValid) {
      setFormIsValid(true)
    }
    else {
      setFormIsValid(false)
    }
  }, [nameIsValid, emailIsValid])

  // const changeHandler = (event) =>  {
  //     setNameInput(event.target.value)
  // }

  //   const emailChangeHandler = (event) =>  {
  //     setEmailInput(event.target.value)
  // }

  // const onBlurHandler = (event) => {
  //   setInputTouch(true)
  // }

  // const onEmailBlurHandler = (event) => {
  //   setEmailTouch(true)
  // }

  const submitHandler = (event) => {
    event.preventDefault()
    // setInputTouch(true)
    // setEmailTouch(true)
    // if(nameInput.trim().length === 0 && emailInput.trim().length === 0){
    //   setInputIsValid(false)
    //   setEmailIsValid(false)
    //   return
    // }

    // setNameInput('')
    // setInputTouch(false)
    // setEmailInput('')
    // setEmailTouch(false)

    nameReset()
    emailReset()
  }

  const controlNameClass = !nameIsInValid ? 'form-control' : 'form-control invalid'
  const controlEmailClass = !emailIsInValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={submitHandler}>
      <div className={controlNameClass}>
        <label htmlFor="">Username</label>
        <input value={enteredNameInput} type="text" id="username" className="form-input"
          onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {nameIsInValid && <p className='error-text'>*Username is Required</p>}
      </div>
      <div className={controlEmailClass}>
        <label htmlFor="">Email</label>
        <input value={enteredEmailInput} type="text" id="username" className="form-input"
          onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailIsInValid && <p className='error-text'>*Email is Required</p>}
      </div>
      <div className="form-actions">
        <button type='submit' disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput

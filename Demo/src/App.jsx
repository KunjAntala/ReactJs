import { useState } from 'react'
import './App.css'
import Button from './template/Button'

function App() {
  const [show, setShow] = useState(false)

  const onClickHandler = () => {
    setShow(!show)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {show && <p>Click on the Vite and React logos to learn more</p>}
      <Button onClick={onClickHandler} type='button'>Click me</Button>
    </>
  )
}

export default App

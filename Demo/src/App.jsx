import { useCallback, useState } from 'react'
import './App.css'
import Button from './templates/Button'
import Paragraph from './components/Paragraph'

function App() {
  const [show, setShow] = useState(false)
const [authorized,setAuthorized] = useState(false)
  const onClickHandler = useCallback(() => {
    console.log('On Click Handler');
    if(authorized){
      setShow(prevState => !prevState)
    }
  },[authorized])

  const authorizedHandler = () => {
    console.log('Authorized Handler');
    setAuthorized(true)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* {show && <p>This is Shown Conditionaly</p>} */}
      <Button onClick={authorizedHandler} type='button'>Authorization</Button>
      <Paragraph show={true} list={['This is Shown Conditionaly, Click on button to hide the content']}/>
      <Button onClick={onClickHandler} type='button'>Click me</Button>
    </>
  )
}

export default App

import './App.css'
import Auth from './components/Auth'
import Headers from './components/Headers'
import Profile from './components/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Headers></Headers>
      <Routes>
          <Route path='/' element={ <Auth/> }></Route>  
          <Route path='/auth' element={ <Auth/> }/> 
          <Route path='/profile' element={ <Profile/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

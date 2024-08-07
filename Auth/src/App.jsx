import { useContext } from 'react'
import './App.css'
import Auth from './components/Auth'
import Headers from './components/Headers'
import Profile from './components/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthContext from './components/store/auth-store'

function App() {
  const authContext = useContext(AuthContext)
  return (
    <BrowserRouter>
    <Headers></Headers>
      <Routes>
          <Route path='/' element={ <Auth/> }></Route>  
          <Route path='/auth' element={ <Auth/> }/> 
          {authContext.IsLogged && <Route path='/profile' element={ <Profile/>} />}
          <Route path='*' element={ <Auth/> }/> 
        </Routes>
    </BrowserRouter>
  )
}

export default App

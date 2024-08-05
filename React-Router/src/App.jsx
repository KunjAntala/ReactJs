import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Users from './components/pages/Users'
import Headers from './components/Headers'
import UserDetails from './components/pages/UserDetails' 

function App() {

  return (
    <div>
      <Headers></Headers>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> }></Route>  
          <Route path='/home' element={ <Home/> }/> 
          <Route path='/users' element={ <Users/>} />
          <Route path='/users/:userId' element={ <UserDetails/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App

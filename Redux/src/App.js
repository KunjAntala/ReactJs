import './App.css';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import nikelogo from './assets/nike_logo.svg'
import jordanlogo from './assets/jordan_logo.svg'

function App() {
  return (
    <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login image1={jordanlogo} image2={nikelogo}/>}></Route>
        </Routes>
    </Provider>
  );
}

export default App;

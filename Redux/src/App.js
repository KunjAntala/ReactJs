import './App.css';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </Provider>
  );
}

export default App;

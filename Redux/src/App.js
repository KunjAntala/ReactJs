
import './App.css';
import Shoes from './components/Shoes';
import { Navbar } from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">
     <Shop/>
     <Shoes/>
    </div>
    </>
  );
}

export default App;

import './App.css';
import Shoes from './components/Shoes';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import shoes1 from './assets/s1.png'
import shoes2 from './assets/s2.png'
import shoes3 from './assets/s3.png'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
        <Shoes image={shoes1} description='Sustainable Material' sname='Nike Pegasus 41'
          scategory="Men's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00'
          button='Add to Cart' />
        <Shoes image={shoes2} description='Sustainable Material' sname='Nike Pegasus 41'
          scategory="Women's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00'
          button='Add to Cart' />
        <Shoes image={shoes3} description='Sustainable Material' sname='Nike Pegasus 41'
          scategory="Women's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00'
          button='Add to Cart' />
      </div>
    </Provider>
  );
}

export default App;

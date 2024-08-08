import React from 'react'
import './Shoes.css'
// import shoes1 from '../src/assets/s1.png'

function Shoes() {

  return (
    <div className="shoes">
        <div className="item">
            <div className='image'>
                {/* <img src={shoes1} width="100" height="50"/> */}
            </div>
            <div className="hero">
                <span className="description">Sustainable Material</span>
                <span className="sname">Nike Pegasus 41</span>
                <p className="scolor">Men's Road Runnig Shoes</p>
                <span className="scolor">1 Colour</span>
                <span className="price">MRP : ₹ 11 895.00</span>
                <button>Add to Cart</button>
            </div>
        </div>
        <div className="item">
            <div className='image'>
                {/* <img src="/WebSite/assets/s2.png" alt=""> */}
            </div>
            <div className="hero">
                <span className="description">Sustainable Material</span>
                <span className="sname">Nike Pegasus 41</span>
                <p className="scolor">Women's Road Runnig Shoes</p>
                <span className="scolor">1 Colour</span>
                <span className="price">MRP : ₹ 11 895.00</span>
                <button>Add to Cart</button>
            </div>
        </div>
        <div className="item">
            <div className='image'>
                {/* <img src="/WebSite/assets/s3.png" alt=""> */}
            </div>
            <div className="hero">
                <span className="description">Sustainable Material</span>
                <span className="sname">Nike Pegasus 41</span>
                <p className="scolor">Women's Road Runnig Shoes</p>
                <span className="scolor">1 Colour</span>
                <span className="price">MRP : ₹ 11 895.00</span>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Shoes

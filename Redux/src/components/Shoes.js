import React from 'react'
import './Shoes.css'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'

function Shoes({id, image, description, sname, scategory, scolor, price }) {
    
    const dispatch = useDispatch()

  return (
    <div className="shoes">
        <div className="item">
            <div className='image'>
                <img src={image}></img>
            </div>
            <div className="hero">
                <span className="description">{description}</span>
                <span className="sname">{sname}</span>
                <p className="scolor">{scategory}</p>
                <span className="scolor">{scolor}</span>
                <span className="price">{price}</span>
                <button onClick={() => dispatch(
                    addtoCart({id, image, description, sname, scategory, scolor, price })
                    )}>Add to Cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default Shoes

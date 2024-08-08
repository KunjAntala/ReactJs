import React from 'react'
import './Shoes.css'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'

function Shoes(props) {
    
    const dispatch = useDispatch()

  return (
    <div className="shoes">
        <div className="item">
            <div className='image'>
                <img src={props.image}></img>
            </div>
            <div className="hero">
                <span className="description">{props.description}</span>
                <span className="sname">{props.sname}</span>
                <p className="scolor">{props.scategory}</p>
                <span className="scolor">{props.scolor}</span>
                <span className="price">{props.price}</span>
                <button onClick={() => dispatch(addtoCart())}>{props.button}</button>
            </div>
        </div>
    </div>
  )
}

export default Shoes

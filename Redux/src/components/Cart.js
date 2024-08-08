import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { removefromCart } from '../redux/cartSlice'

function Cart() {
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <div className='ct-hero'>
            {
                cartItems.map(item => {
                    return (
                        <div className="ct-shoes">
                            <div className="ct-item">
                                <div className='ct-image'>
                                    <img src={item.image}></img>
                                </div>
                                <div className="ct-hero">
                                    <span className="ct-description">{item.description}</span>
                                    <span className="ct-sname">{item.sname}</span>
                                    <p className="ct-scolor">{item.scategory}</p>
                                    <span className="ct-scolor">{item.scolor}</span>
                                    <span className="ct-price">{item.price}</span>
                                    <button onClick={() => dispatch(removefromCart({id: item.id}))}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart

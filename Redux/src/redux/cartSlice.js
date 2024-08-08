import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removefromCart: (state, action) => {
            state.cart = state.cart.filter(index => index.id !== action.payload.id)
        }
    }
})

export default cartSlice.reducer
export const {addtoCart} = cartSlice.actions
export const {removefromCart} = cartSlice.actions

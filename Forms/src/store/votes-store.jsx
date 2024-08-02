import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {votes:0,toggle:true}
// const reducerFunction = (state=initialState,action) => {
//     if(action.type === 'Increment'){
//         return {votes:state.votes+1,toggle:state.toggle}
//     }
//     else if(action.type === 'Decrement'){
//         return {votes:state.votes-1,toggle:state.toggle}
//     }
//     else if(action.type === 'Increse'){
//         return {votes:state.votes+action.payload,toggle:state.toggle}
//     }
//     else if(action.type === 'Toggle'){
//         return {votes:state.votes,toggle:!state.toggle}
//     }
// }
reducer = {
    Increment:(state) => state.votes++,
    Decrement:(state) => state.votes--,
    Increase:(state,action) => state.votes=state.votes + action.payload,
    Toggle:(state) => !state.toggle
}
const voteSlice = createSlice('votes',initialState,reducer)
export const voteStore = configureStore({reducer:{votes:voteSlice.reducer}})
export const actions = voteSlice.actions
// export const voteStore = createStore(voteSlice.reducer)

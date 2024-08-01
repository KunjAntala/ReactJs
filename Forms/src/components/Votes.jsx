import React from 'react'
import './Votes.css'
import { useSelector, useDispatch } from 'react-redux'

function Votes() {
    // const votes = useSelector(state => state.Votes)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch({type:'Increment'})
    }

    const decrementHandler = () => {
        dispatch({type:'Decrement'})
    }

    const addby10Handler = () => {
        dispatch({type:'Increse',value:10})
    }

    const toggleVotesHandler = () => {

    }
    return (
        <div className='votes'>
            <h1>Redux Votes</h1>
            <div className='value'>Number of votes</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={addby10Handler}>Increment</button>
            <button onClick={toggleVotesHandler}>Show/hide Votes</button>
        </div>
    )
}

export default Votes

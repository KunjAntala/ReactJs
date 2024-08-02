import React from 'react'
import './Votes.css'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../store/votes-store'

function Votes() {
    const initialState = {votes:0,toggle:true}
    const votes = useSelector((state = initialState) => state.votes)
    const showVotes = useSelector((state = initialState) => state.toggle)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        //   dispatch({type:'Increment'})
        dispatch(actions.Increment())
    }

    const decrementHandler = () => {
        // dispatch({type:'Decrement'})
        dispatch(actions.Decrement())
    }

    const addby10Handler = () => {
        // dispatch({type:'Increse',payload:10})
        dispatch(actions.Increase(10))
    }

    const toggleVotesHandler = () => {
        // dispatch({type:'Toggle'})
        dispatch(actions.Toggle())
    }
    return (
        <div className='votes'>
            <h1>Redux Votes</h1>
            {showVotes && <div className='value'>{votes}</div>}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={addby10Handler}>Increment</button>
            <button onClick={toggleVotesHandler}>Show/hide Votes</button>
        </div>
    )
}

export default Votes

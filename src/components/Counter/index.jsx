import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <button
                onClick={() => dispatch({ type: 'INCREMENT' })}
            >Increments</button>
            <div>{count}</div>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    )
}

export default Counter

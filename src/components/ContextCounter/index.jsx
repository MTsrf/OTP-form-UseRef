import React, { useReducer } from "react";


const initialValue = { count: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 };
        case 'dec':
            return { count: state.count - 1 };
        default:
            return new Error();
    }
}

const ContextCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    { console.log(state.count) }
    return (
        <>
            <button
                onClick={() => dispatch({ type: 'inc' })}
            >Increments</button>
            {state.count}
            <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
        </>
    )
}

export default ContextCounter


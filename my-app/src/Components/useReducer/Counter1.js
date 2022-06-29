import React, { useReducer } from "react";


//initial State
const initialState = { count: 0};

// define Reducer
function reducer(state, action) {
    switch(action.type) {
        case "INCREMENT":
            return{ count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1};
        default:
            return { count: state.count };
    }
}
//  useReducer
function Counter1() {
    const[state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Current Count value {state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT"})}>Decrement</button>

        </div>
    )
}

export default Counter1

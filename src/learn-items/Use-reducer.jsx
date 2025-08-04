import {useReducer} from "react";
const initialState = 0;
const reducer = (state, action)=>{
    switch(action){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}
const UseReducerExample = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <>
        <h1>Use Reducer</h1>
        <p>Count = {count}</p>
        <button type="button" className="btn btn-primary" onClick={()=>dispatch("increment")}>Increment</button>
        <button type="button" className="btn btn-danger" onClick={()=>dispatch("decrement")}>Decrement</button>
        </>
    );
}
export default UseReducerExample;
import {useState, useCallback} from "react";
const UseCallbackExample = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(c=>c+1);
    }, []);
    return(
        <>
        <h1>Use Callback</h1>
        <h1>Count: {count}</h1>
        <Child onClick={increment}  />
        </>
    );
}
const Child = ({onClick}) => {
    return(
        <>
        <button onClick={onClick}>Increase</button>
        </>
    );
}
export default UseCallbackExample;
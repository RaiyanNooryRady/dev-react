import { useRef, useEffect, useState } from "react";
const UseRefExample = () => {
    const [inputValue, setInputValue] = useState("");
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1);
    }, [inputValue]);
    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Use Ref</h1>
            <p>Render Count: {count}</p>
        </>
    );
}
export default UseRefExample;
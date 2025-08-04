import { useRef, useEffect, useState } from "react";
const UseRefExample = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    })
    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Use Ref</h1>
            <p>Render Count: {count.current}</p>
        </>
    );
}
export default UseRefExample;
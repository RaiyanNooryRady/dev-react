import  {useEffect, useState}  from "react";
const UseEffectTimer = () => {
    const [count, setCount] = useState(0);
    const [calc, setCalc] = useState(0);
    // useEffect (()=>{
    //     const timer = setInterval(()=>{
    //         setCount(count + 1);
    //     }, 1000);
    //    return ()=> clearInterval(timer);
    //     // setTimeout(()=>{
    //     //     setCount((prevCount)=> prevCount + 1);
    //     // }, 1000);
    // }, [count]);
    useEffect(()=>{
        setCalc(count * 2);
    }, [count]);
    return (
        <>
            <h1>Use Effect</h1>
            {/* <p>Count: {count}</p> */}
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
            <p>Calc: {calc}</p>
        </>
    );
}
export default UseEffectTimer;
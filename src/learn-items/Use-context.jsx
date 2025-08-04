import { useState, useContext, createContext} from "react";
const UserContext = createContext();
const UseContextExample = () => {
    const [user, setUser]= useState("Rady");
    return (
        <>
        <h1>Use Context</h1>
        <p>User: {user}</p>
        <button onClick = {()=>setUser(user === "Rady" ? "Dahy" :"Rady")}>Change User</button>
        <ComponentA />{/* without context */}
        <UserContext.Provider value={user}>
            <ComponentA />
        </UserContext.Provider>
        </>
    );
}
const ComponentA = () => {
    return (
        <>
        <h1>Component A</h1>
        <ComponentB />
        </>
    );
}
const ComponentB = () => {
    return (
        <>
        <h1>Component B</h1>
        <ComponentC />
        </>
    );
}
const ComponentC = () =>{
    return (
        <>
        <h1>Component C</h1>
        <ComponentD />
        </>
    );
}
const ComponentD = () => {
   const user = useContext(UserContext);
    return (
        <>
        <h1>Component D</h1>
        <p>User: {user} in D</p>
        </>
    );
}
export default UseContextExample;
import { useState } from "react";
const UseState = () => {
    const [car, setCar] = useState("Hundai");
    return (
        <div>
            <h1>UseState</h1>
            <p>MY favorite car is {car}</p>
            <div className="d-flex gap-2">
                <button className="btn btn-success" onClick={() => setCar("Volvo")}>Volvo</button>
                <button className="btn btn-success" onClick={() => setCar("Ena")}>Ena</button>
                <button className="btn btn-success" onClick={() => setCar("Unique")}>Unique</button>
                <button className="btn btn-success" onClick={() => setCar("Toyota")}>Toyota</button>
                <button className="btn btn-success" onClick={() => setCar("Hundai")}>Hundai</button>
            </div>
        </div>
    )
}
export default UseState;
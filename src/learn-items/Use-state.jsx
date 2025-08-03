import { useState } from "react";
const UseState = () => {
    const [car, setCar] = useState({
        brand: "Hundai",
        model: "2025",
        color: "Red",
        price: 100000
    });
    return (
        <div>
            <h1>UseState</h1>
            <p>MY favorite car is {car.brand}</p>
            <div className="d-flex gap-2">
                <button className="btn btn-success" onClick={() => setCar({...car, brand: "Volvo"})}>Volvo</button>
                <button className="btn btn-success" onClick={() => setCar((prevState)=>{
                    return {
                        ...prevState, brand: "Ena"
                    }
                })}>Ena</button>
                <button className="btn btn-success" onClick={() => setCar({...car, brand: "Unique"})}>Unique</button>
                <button className="btn btn-success" onClick={() => setCar({...car, brand: "Toyota"})}>Toyota</button>
                <button className="btn btn-success" onClick={() => setCar({...car, brand: "Hundai"})}>Hundai</button>
                {/* Don't do this as it will replace the whole object */}
                <button className="btn btn-danger" onClick={() => setCar({brand:"Rejected"})}>Rejected</button>
                <p>{car.model}</p>
                <p>{car.color}</p>
                <p>{car.price}</p>
             
            </div>
        </div>
    )
}
export default UseState;
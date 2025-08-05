import React from "react";
import { MouseEvent } from "react";

const ListGroup = () => {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    //items = [];
    const handleClick = (event: MouseEvent) => {
        console.log(event);
    }
    // You can use if statements here, outside the return
    //const message = items.length === 0 ? <p>No items found</p> : null;
    //shorter
    const message = items.length === 0 && <p>No items found</p>
    const showItems = items.map((item, index) => {
        return (
            <li
                key={item}
                className="list-group-item"
                onClick={handleClick}>
                {index} {item}
            </li>
        )
    })
    return (
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
                {showItems}
            </ul>
        </>
    );
};

export default ListGroup;
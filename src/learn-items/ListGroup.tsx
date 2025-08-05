import React from "react";
import { useState } from "react";
const ListGroup = (props: { items: string[], heading: string }) => {
    let items = props.items;
    let heading = props.heading;
    //items = [];
    const [selectedIndex, setSelectedIndex] = useState(-1);    
    // You can use if statements here, outside the return
    //const message = items.length === 0 ? <p>No items found</p> : null;
    //shorter
    const message = items.length === 0 && <p>No items found</p>
    const showItems = items.map((item, index) => {
        
        return (
            <li
                key={item}
                className={selectedIndex === index ? "list-group-item active cursor-pointer" : "list-group-item cursor-pointer"}
                onClick={() => setSelectedIndex(index)}>
                {index} {item}
            </li>
        )
    })
    return (
        <>
            <h1>{heading}</h1>
            {message}
            <ul className="list-group">
                {showItems}
            </ul>
        </>
    );
};

export default ListGroup;
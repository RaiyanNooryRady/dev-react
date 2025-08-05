

const ListGroup = () => {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
     items = [];
    // You can use if statements here, outside the return
    //const message = items.length === 0 ? <p>No items found</p> : null;
    //shorter
    const message = items.length === 0 && <p>No items found</p>
    const showItems = items.map((item) => {
        return <li key={item} className="list-group-item" onClick={() => console.log(item)}>{item}</li>
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


const ListGroup = () => {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    // items=[];
    // You can use if statements here, outside the return
    let content;
    if (items.length === 0) {
        content = <p>No items found</p>;
    } else {
        content = items.map((item) => {
            return <li key={item} className="list-group-item" onClick={() => console.log(item)}>{item}</li>
        });
    }
    
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {content}
            </ul>
        </>
    );
};

export default ListGroup;
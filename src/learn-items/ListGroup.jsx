

const ListGroup = () => {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    // items=[];
    // You can use if statements here, outside the return
   

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {
                    items.length === 0 ? <p>No items found</p> :
                        items.map((item) => {
                            return <li key={item} className="list-group-item" onClick={() => console.log(item)}>{item}</li>
                        })
                }
            </ul>
        </>
    );
};

export default ListGroup;
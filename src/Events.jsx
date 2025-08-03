const showAlert = (valAlert) =>{
    alert(valAlert);
}
const Events= (props) => {
    const eventName= props.occation;
    return (
        <div className="dev-events">
            <h2 className='text-success'>Event: {eventName}</h2>
            <button className="btn btn-primary" onClick={()=>showAlert(`Hello! this is ${eventName} in events page`)}>Click me!</button>
        </div>
    );
}
export default Events;
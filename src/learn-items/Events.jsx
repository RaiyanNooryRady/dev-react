const showAlert = (valAlert) =>{
    alert(valAlert);
}
const Events= (props) => {
    const eventName= props.occation;
    const eventDate = props.date; // Added to capture the date prop
    return (
        <div className="dev-events">
            <h2 className='text-success'>Event: {eventName}</h2>
            <button className="btn btn-primary" onClick={()=>showAlert(`Hello! this is ${eventName} in events page. Event date is ${eventDate}`)}>Click me!</button>
        </div>
    );
}
export default Events;
const showAlert = (valAlert) =>{
    alert(valAlert);
}
const Events= () => {
    return (
        <div className="dev-events">
            <h1 className='text-danger'>Events in React</h1>
            <button className="btn btn-primary" onClick={()=>showAlert('Hello! this is events page')}>Click me!</button>
        </div>
    );
}
export default Events;
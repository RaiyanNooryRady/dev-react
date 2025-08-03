
const Employee = (props)=>{
    return(
        <>
        <h1> Employee Details </h1>
        <p>Name: {props.person.name}</p>
        <p>Name: {props.person.age}</p>
        <p>Name: {props.person.address.city}</p>
        <p>Name: {props.person.address.country}</p>
        {
            Object.entries(props.person.company.previous).forEach((key, value)=>{
               console.log(key, value);
            })
        }
        
        </>
    );
}

const Destructuring = ({person}) => {
    const { company: {previous: {company1, company2}}, age} = person;
    return(
        <>
           <h1>Destructuring</h1>
           <p>Age: {age}</p>
           <p>Previous Company 1: {company1}</p>
           <p>Previous Company 2: {company2}</p>
        </>
    );
}
export default Employee;
export {Destructuring};
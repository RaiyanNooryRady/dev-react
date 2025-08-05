import CarEs6 from '../learn-items/Es6.jsx'
import Events from '../learn-items/Events.jsx'
import Employee from '../learn-items/Destructuring.jsx'
import { Destructuring } from '../learn-items/Destructuring.jsx'
import UseState from '../learn-items/Use-state.jsx'
import UseEffectTimer from '../learn-items/Use-effect.jsx'
import UseContextExample from '../learn-items/Use-context.jsx'
import UseRefExample from '../learn-items/Use-ref.jsx'
import UseReducerExample from '../learn-items/Use-reducer.jsx'
import Counter from '../learn-items/Use-reducer2.jsx'
import UseCallbackExample from '../learn-items/Use-callback.jsx'
import ListGroup from '../learn-items/ListGroup.jsx'
const Learn = () => {
    const person = {
        name: "raiyan",
        age: 27,
        address: {
            city: "Sylhet",
            country: "Bangladesh"
        },
        company: {
            present: {
                company: "LIILab",
                position: "Software Engineer",
                Location: "Dhaka"
            },
            previous: {
                company1: "Tech Company",
                company2: "Software Solutions"
            }
        },
        skills: ["React", "Node.js", "JavaScript"]
    }
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    let colors=["red", "blue", "green", "yellow", "purple"];
    const handleSelectItem = (item) => {
        console.log(item);
    }
    return (
        <>
            <div className="container my-5">
                <h1>Welcome to the learning page</h1>
                <CarEs6 />
                <Events occation="Birthday" date="2025-08-01" />
                <Events occation="Marriage" date="2025-08-05" />
                <Employee person={person} />
                <Destructuring person={person} />
                <UseState />
                <UseEffectTimer />
                <UseContextExample />
                <UseRefExample />
                <UseReducerExample />
                <Counter />
                <UseCallbackExample />
                <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
                <ListGroup items={colors} heading="Colors" onSelectItem={handleSelectItem} />
            </div>

        </>
    );
}
export default Learn;
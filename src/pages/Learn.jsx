import CarEs6 from '../learn-items/Es6.jsx'
import Events from '../learn-items/Events.jsx'
import Employee from '../learn-items/Destructuring.jsx'
import { Destructuring } from '../learn-items/Destructuring.jsx'
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
    return (
        <>
            <h1>Welcome to the learning page</h1>
            <CarEs6 />
            <Events occation="Birthday" date="2025-08-01" />
            <Events occation="Marriage" date="2025-08-05" />
            <Employee person={person} />
            <Destructuring person={person} />
        </>
    );
}
export default Learn;
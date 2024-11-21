import React, { useState } from 'react';

const PersonInfo = () => {
    const [message, setMessage] = useState("");

    const person = {
        name: "Aisuluu Sharipova",
        position: "Developer",
        company: "Microsoft",
        hobby: "Volleyball",
        city: "Bishkek",
        age: 20
    };

    const handleClick = () => {
        setMessage("You clicked the button!");
    };

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Position: {person.position}</p>
            <p>Company: {person.company}</p>
            <p>Hobby: {person.hobby}</p>
            <p>City: {person.city}</p>
            <p>Age: {person.age}</p>
            {message && <p>{message}</p>}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default PersonInfo;



import React from 'react';

const PersonalInfo = () => {
    const person = {
        name: "Aisuluu Sharipova",
        position: "Developer",
        company: "Microsoft",
        hobby: "Volleyball",
        city: "Bishkek",
        age: 20
    };

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Position: {person.position}</p>
            <p>Company: {person.company}</p>
            <p>Hobby: {person.hobby}</p>
            <p>City: {person.city}</p>
            <p>Age: {person.age}</p>
        </div>
    );
};

export default PersonalInfo;

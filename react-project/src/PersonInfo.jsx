import React, { useState } from 'react';
import workerPhoto from './assets/img/programmer.png';

const PersonInfo = () => {
  const [position, setPosition] = useState("Middle Developer");
  const [message, setMessage] = useState(""); 

  const person = {
    name: "Aisuluu Sharipova",
    company: "Microsoft",
    role: "Backend Developer",
    city: "Bishkek",
    age: 20,
    photoUrl: workerPhoto
  };

  const handlePromotion = () => {
    setPosition("Senior Developer");
    setMessage("You have been promoted!"); 
  };

  return (
    <div className="container">
      <div className="photo">
        <img src={person.photoUrl} alt="Worker" />
      </div>
      <div className="info">
        <h1>{person.name}</h1>
        <p><strong>Position:</strong> {position}</p>
        <p><strong>Company:</strong> {person.company}</p>
        <p><strong>Role:</strong> {person.role}</p>
        <p><strong>City:</strong> {person.city}</p>
        <p><strong>Age:</strong> {person.age}</p>
        {message && <p>{message}</p>}
        <button onClick={handlePromotion}>Promote</button>
      </div>
    </div>
  );
};

export default PersonInfo;

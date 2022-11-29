import React, { useState } from "react";

const UseStateObject = () => {
  const [person, updatePerson] = useState({
    name: "Rahiman",
    age: 24,
    place: "norway",
  });

  const changeButton = () => {
    if (person.age === 24) {
      updatePerson({ ...person, age: 10 });
    } else {
      updatePerson({ ...person, age: 24 });
    }
  };

  return (
    <div>
      <p>{person.name}</p>
      <h1>{person.age}</h1>
      <h4>{person.place}</h4>
      <button onClick={changeButton}>Click</button>
    </div>
  );
};

export default UseStateObject;

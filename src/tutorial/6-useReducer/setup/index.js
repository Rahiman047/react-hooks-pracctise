import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "TESTING") {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      showModal: true,
      modalContext: "Hello There",
    };
  }
  if (action.type === "ERROR") {
    return {
      ...state,
      showModal: true,
      modalContext: "Pls add value",
    };
  }
};

const defaultState = {
  people: [],
  showModal: false,
  modalContext: "",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "TESTING", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "ERROR" });
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {state.showModal && <Modal modalContext={state.modalContext} />}
      <form className="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={name} />
        <button type="submit">Add</button>
      </form>
      {state.people.map((eachPeople) => (
        <div key={eachPeople.id}>
          <p>{eachPeople.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;

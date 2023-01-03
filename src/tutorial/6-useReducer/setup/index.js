import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import reducer from "./reducer";

// reducer function

const defaultState = {
  people: data,
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

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div>
      {state.showModal && (
        <Modal modalContext={state.modalContext} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={name} />
        <button type="submit">Add</button>
      </form>
      {state.people.map((eachPeople) => (
        <div key={eachPeople.id} className="item">
          <h4>{eachPeople.name}</h4>
          <button onClick={() => removeItem(eachPeople.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Index;

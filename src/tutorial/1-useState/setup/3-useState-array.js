import React from "react";
import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [userData, setData] = useState(data);

  const removeSingle = (id) => {
    // const newArr = [];
    // userData.map((eachPerson) => {
    //   if (eachPerson.id !== id) {
    //     return newArr.push(eachPerson);
    //   }
    //   setData(newArr);
    //   return [];
    // });

    const newData = userData.filter((eachPerson) => eachPerson.id !== id);
    setData(newData);
  };

  return (
    <>
      {userData.map((eachPerson) => {
        const { id, name } = eachPerson;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeSingle(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setData([])}>
        clear all
      </button>
    </>
  );
};

export default UseStateArray;

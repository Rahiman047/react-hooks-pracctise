import React, { useState } from "react";

const UseStateBasics = () => {
  const [val, changeVal] = useState("random title");

  const changeTitle = () => {
    if (val === "random title") {
      changeVal("title changed");
    } else {
      changeVal("random title");
    }
  };

  return (
    <>
      <h2>{val}</h2>
      <button type="button" className="btn" onClick={changeTitle}>
        click
      </button>
    </>
  );
};

export default UseStateBasics;

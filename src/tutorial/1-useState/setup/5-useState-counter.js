import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const resetVal = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button type="button" className="btn" onClick={increment}>
        +
      </button>
      <button type="button" className="btn" onClick={resetVal}>
        Reset
      </button>
      <button type="button" className="btn" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default UseStateCounter;

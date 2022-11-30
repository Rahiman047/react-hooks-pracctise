import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 2) {
      document.title = `New Messages ${count}`;
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click here
      </button>
    </div>
  );
};

export default UseEffectBasics;

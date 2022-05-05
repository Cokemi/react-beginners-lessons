import React, { Fragment, useState, useEffect } from "react";

const MainUseEffect = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("counter: " + counter);
    document.title = "React App " + counter;
  });

  return (
    <Fragment>
      <div className="container mt-5">
        <h1>Use Effect</h1>
        <p>Counter: {counter}</p>
        <button onClick={handleCounter}>Add +1</button>
      </div>
    </Fragment>
  );
};

export default MainUseEffect;

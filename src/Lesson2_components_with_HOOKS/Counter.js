import React, { Fragment, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddCounter = () => {
    setCount(count + 1);
  };

  const handleMinusCounter = () => {
    setCount(count - 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <Fragment>
      <h1>Counter: {count}</h1>
      <button onClick={handleAddCounter}>Add +1</button>
      <button onClick={handleMinusCounter}>Add -1</button>
      <button onClick={handleResetCounter}>Reset Counter</button>
    </Fragment>
  );
};

export default Counter;

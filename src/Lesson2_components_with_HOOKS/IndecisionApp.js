import React, { Fragment, useState } from "react";

const IndecisionApp = () => {
  const [options, setOptions] = useState([]);
  const [whatToDoText, setWhatToDoText] = useState("");

  const handleWhatToDo = () => {
    const randomNumber = Math.floor(Math.random() * options.length);
    setWhatToDoText(options[randomNumber]);
  };

  const handleRemoveAll = () => {
    setOptions([]);
    setWhatToDoText("");
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.taskInput.value;
    setOptions([...options, option]);
    e.target.elements.taskInput.value = "";
  };

  return (
    <Fragment>
      <h1>This is the Indecision App</h1>
      <h3>Put your life in the hands of a computer</h3>

      <button onClick={handleWhatToDo} disabled={options.length === 0}>
        What should I do?
      </button>
      {whatToDoText && <label style={{ color: "red" }}> {whatToDoText}</label>}
      <br />

      <form onSubmit={handleAddOption}>
        <input type="text" placeholder="put your task here" name="taskInput" />
        <button>Add new Task</button>
      </form>

      <p>There are {options.length} options</p>
      <button onClick={handleRemoveAll}>Remove All Options</button>
      <br />
      <ul>
        {options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default IndecisionApp;

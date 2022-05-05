import React, { Fragment, useState } from "react";

const AddUser = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name) {
      alert("Fill Name Field");
      return;
    }
    if (!user.username) {
      alert("Fill UserName Field");
      return;
    }

    props.addUser(user);
    setUser(initialFormState);
  };

  return (
    <Fragment>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <h5>Name</h5>
        <input
          type="text"
          name="name"
          className="my-2"
          value={user.name}
          onChange={handleInputChange}
        />
        <h5>Username</h5>
        <input
          type="text"
          name="username"
          className="my-2"
          value={user.username}
          onChange={handleInputChange}
        />
        <br />
        <button className="btn btn-primary">Add New User</button>
      </form>
    </Fragment>
  );
};

export default AddUser;

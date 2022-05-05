import React, { Fragment, useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Fragment>
      <h2>Edit user</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          props.updateUser(user.id, user);
        }}
      >
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
        <button className="btn btn-outline-primary">Update User</button>
        <button
          onClick={() => props.setEditing(false)}
          className="btn btn-outline-secondary"
        >
          Cancel
        </button>
      </form>
    </Fragment>
  );
};

export default EditUserForm;

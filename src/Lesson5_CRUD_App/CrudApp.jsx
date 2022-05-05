import React, { Fragment, useState } from "react";
import AddUser from "./AddUser";
import ViewUsers from "./ViewUsers";
import EditUserForm from "./EditUserForm";

const CrudApp = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [uniqueId, setUniqueId] = useState(4);
  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = uniqueId;
    setUniqueId(uniqueId + 1);
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <Fragment>
      <div className="container">
        <h1>Crud App with Hooks</h1>
        <div className="d-flex flex-row">
          {editing ? (
            <div className="p-4">
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="p-4">
              <AddUser addUser={addUser} />
            </div>
          )}
          <div className="p-4">
            <ViewUsers
              users={users}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CrudApp;

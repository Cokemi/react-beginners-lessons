import React, { Fragment } from "react";

const ViewUsers = (props) => {
  return (
    <Fragment>
      <h2>View Users</h2>
      <table border="0" width="150%">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        props.editRow(user);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => props.deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3}>No Users</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ViewUsers;

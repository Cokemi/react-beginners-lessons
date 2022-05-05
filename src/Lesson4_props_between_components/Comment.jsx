import React, { Fragment } from "react";

const Comment = ({ person }) => {
  return (
    <Fragment>
      <h2 style={{ padding: "50px 0px 0px 0px" }}>Comment</h2>
      <hr />
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={person.url}
            alt="placeholder img"
            style={{
              position: "absolute",
            }}
          />
          <h3 style={{ position: "relative", padding: "0px 0px 15px 150px" }}>
            {person.name}
          </h3>
        </div>
        <div
          className="Comment-text"
          style={{ position: "relative", padding: "0px 0px 15px 150px" }}
        >
          {person.text}
        </div>
      </div>
    </Fragment>
  );
};

export default Comment;

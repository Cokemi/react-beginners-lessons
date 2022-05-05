import React, { Fragment } from "react";
import Comment from "./Comment";

const CommentMaster = () => {
  const person = {
    name: "Jorge",
    url: "https://via.placeholder.com/128",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
  };
  return (
    <Fragment>
      <div className="container mt-2">
        <Comment person={person} />
        <Comment person={person} />
        <Comment person={person} />
      </div>
    </Fragment>
  );
};

export default CommentMaster;

import React, { Fragment } from "react";

const HelloPerson = (props) => {
  console.log(props);
  return (
    <Fragment>
      <h3
        className="container my-4"
        style={{ color: "brown", fontSize: "20px" }}
      >
        Hi {props.guy}, your rol is {props.rol} with {props.years} years of exp
      </h3>
    </Fragment>
  );
};

export default HelloPerson;

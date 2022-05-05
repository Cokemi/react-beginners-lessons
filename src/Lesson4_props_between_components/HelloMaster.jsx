import React, { Fragment } from "react";
import HelloPerson from "./HelloPerson";

const HelloMaster = () => {
  return (
    <Fragment>
      <HelloPerson guy="Hector" rol="Developer" years={7} />
      <HelloPerson guy="Leo" rol="Supporter" years={20} />
      <HelloPerson guy="Alex" rol="HelpDesk" years={1} />
    </Fragment>
  );
};

export default HelloMaster;

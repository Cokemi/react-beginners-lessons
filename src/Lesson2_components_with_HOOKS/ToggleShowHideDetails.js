import React, { Fragment, useState } from "react";

const ToggleShowHideDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [text, setText] = useState("Show Details");

  const handleDetailsButton = () => {
    setShowDetails(!showDetails);
    text === "Show Details" ? setText("Hide Details") : setText("Show Details");
  };

  return (
    <Fragment>
      <h1>Visibility Toggle</h1>
      <button onClick={handleDetailsButton}>{text}</button>
      {showDetails && <p>Press again the button to hide this text</p>}
    </Fragment>
  );
};

export default ToggleShowHideDetails;

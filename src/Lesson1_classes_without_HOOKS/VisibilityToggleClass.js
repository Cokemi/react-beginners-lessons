import React from "react";

class VT extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetails = this.handleDetails.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleDetails(e) {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleDetails} name="detailButton">
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <p disabled={true} name="detailText">
            Press again the button and hide the text
          </p>
        )}
      </>
    );
  }
}

export default function VisibilityToggleClass() {
  return <VT />;
}
// FIRST WAY TO UNDERSTAND REACT PRINCIPLES
// export default function VisibilityToggle() {
//   const [text, setText] = React.useState(false);

//   const onShowDetails = (e) => {
//     setText(!text);
//   };

//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button disabled={false} onClick={onShowDetails}>
//         {text ? "Hide details" : "Show details"}
//       </button>
//       {text && <p disabled={true}>Press again the button and hide the text</p>}
//     </div>
//   );

//   return template;
// }

import React from "react";

class CounterC extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAdd() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}
export default function CounterClass() {
  return <CounterC />;
}

// FIRST WAY TO UNDERSTAND REACT PRINCIPLES
// export default function Counter() {
//   const [counter, setCounter] = React.useState(0);
//   const suma = () => {
//     console.log("add one");
//     setCounter(counter + 1);
//     return counter;
//   };
//   const resta = () => {
//     console.log("substract one");
//     setCounter(counter - 1);
//     return counter;
//   };
//   const reset = () => {
//     console.log("reset to zero");
//     setCounter(0);
//     return counter;
//   };

//   const template = (
//     <div>
//       <h1>Count: {counter}</h1>
//       <button onClick={suma} className="button">
//         +1
//       </button>
//       <button onClick={resta} className="button">
//         -1
//       </button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   return template;
// }

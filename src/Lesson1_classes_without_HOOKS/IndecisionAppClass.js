import React from "react";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
    };
  }

  handlePickOption() {
    let optionSelected = 0;
    if (this.state.options.length > 0) {
      optionSelected = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[optionSelected]);
    } else {
      alert("No options available");
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] };
    });
  }

  handleAddOption(element) {
    if (!element) {
      return "Not valid";
    } else if (this.state.options.indexOf(element) > -1) {
      return "Duplicated task";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(element),
      };
    });
  }

  render() {
    const title = "This is the Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.handlePickOption}
        disabled={!this.props.hasOption}
      >
        What should I do?
      </button>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.option}</li>;
  }
}
class Options extends React.Component {
  render() {
    return (
      <>
        {this.props.options.length > 0 && (
          <p>There are {this.props.options.length} options:</p>
        )}
        <ul>
          {this.props.options.map((o, index) => {
            return <Option key={index} option={o} />;
          })}
        </ul>
        <button onClick={this.props.handleDeleteOptions}>
          Remove All Options
        </button>
      </>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    let option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });

    e.target.elements.option.value = "";
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleAddOption}>
          <input
            type="text"
            name="option"
            placeholder="Put your task here"
          ></input>
          <button>Add Option</button>
          {this.state.error && (
            <p style={{ color: "red" }}>{this.state.error}</p>
          )}
        </form>
      </>
    );
  }
}

export default function IndecisionAppClass() {
  return <IndecisionApp />;
}

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count >= 1) {
      this.setState({ count: this.state.count - 1 });
    } else alert("no!");
  };
  render() {
    return (
      <div className="App">
        <button className="counter" onClick={this.increment}>
          +
        </button>
        <button className="counter" onClick={this.decrement}>
          -
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default App;

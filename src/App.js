import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Diana", lastName: "Müller" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, {this.state.name.firstName} {this.state.name.lastName}, I work
            at {this.state.company}{" "}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  // some function that return an object than we wanna shallow merge
                  return { name: { firstName: "Andrei", lastName: "Neagoie" } };
                },
                // this second callback gonna run only after the previous one be executed
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

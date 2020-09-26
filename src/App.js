import React from "react";
import logo from "./logo.svg";
import Title from "./Title";
import TestButton from "./TestButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title={"Some Title"} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestButton buttonText={"Button text"} />
      </header>
    </div>
  );
}

export default App;

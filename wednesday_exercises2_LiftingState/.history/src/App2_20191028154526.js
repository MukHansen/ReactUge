import React from "react";
import person from "./file2";

const {firstName, lastName} = person;

function App2() {
    return (
      <div className="App">
        <h1>Exercise 2</h1>
        <p>{person.firstName + person.lastName}</p>
      </div>
    );
  }

export default App2;
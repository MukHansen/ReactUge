import React from "react";
import person from "./file2";

const {firstName, email} = person;

function App2() {
    return (
      <div className="App">
        <h1>Exercise 2</h1>
        <p>Firstname; {firstName} Email; {email}</p>
      </div>
    );
  }

export default App2;
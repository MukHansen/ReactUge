import React from "react";
import person, { males, females } from "./file2";

const {firstName, email} = person;

const all = [...males, ...females];

function App2() {
    return (
      <div className="App">
        <h1>Exercise 2</h1>
        <p>Firstname; {firstName} Email; {email}</p>
        console.log({all});
        
      </div>
    );
  }

export default App2;
import React from "react";
import person, { males, females } from "./file2";

const { firstName, email } = person;

const all = [...males, ...females];
console.log(all);

function App2() {
  return (
    <div className="App">
      <h1>Exercise 2</h1>
      <p>Firstname; {firstName}</p>
      <p>Email; {email}</p>
    </div>
  );
}

export default App2;

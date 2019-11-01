import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.PropTypes = {
    name: PropTypes.string
}

function App3() {
  return (
    <div className="App">
      <h1>Exercise 3</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App3;

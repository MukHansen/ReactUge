import React from "react";
import PropTypes from 'prop-types';
import person from names './file2';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson({firstName, lastName, email}) {
    return <h1>Hello, {firstName} {lastName} with email: {email}</h1>;
  }

Welcome.propTypes = {
    name : PropTypes.string.isRequired
}

Welcome.defaultProps = {
    name : "Unkown name"
}

function App3() {
  return (
    <div className="App">
      <h1>Exercise 3</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson 
    </div>
  );
}

export default App3;

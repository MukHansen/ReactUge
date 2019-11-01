import React from "react";
import PropTypes from 'prop-types';
import person, {names} from './file2';

let { firstName, lastName, email } = person;

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    return <h3>Hello, {props.person.firstName} {props.person.lastName} with email: {props.person.email}</h3>;
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
      <WelcomePerson person = {names[0]} />
      <WelcomePerson person = {names[1]} />
      <WelcomePerson person = {names[2]} />
    </div>
  );
}

export default App3;

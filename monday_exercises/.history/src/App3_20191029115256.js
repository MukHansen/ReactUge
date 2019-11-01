import React from "react";
import PropTypes from "prop-types";
import person, { names } from "./file2";

let { firstName, lastName, email } = person;

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
  return (
    <h3>
      Hello, {props.person.firstName} {props.person.lastName} with email:{" "}
      {props.person.email}
    </h3>
  );
}

//function WelcomePerson({firstName, lastName, email}) {
//    return <h3>Hello, {firstName} {lastName} with email: {email}</h3>;
//}

function ListOfNames(props) {
  const { names } = props;
  const lis = names.map(n => <li key={n.email}>{n.firstName} {n.email}</li>);
  return (
    <div style={{ color: "blue" }}>
      <ul className="table">{lis}</ul>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

Welcome.defaultProps = {
  name: "Unkown name"
};

function App3() {
  return (
    <div className="App">
      <h1>Exercise 3</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
      <h2>List</h2>
      <ListOfNames nam={names} />
    </div>
  );
}

export default App3;

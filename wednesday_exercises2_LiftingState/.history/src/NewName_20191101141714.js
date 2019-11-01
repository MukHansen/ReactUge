import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewName(props) {

  const [name, setName] = useState(props.nextName);

  const saveName = evt => {
    if (name.nameText === "") {
      return;
    }
    props.addTodo(name);
    evt.preventDefault();
  };

  useEffect(() => setName({ ...props.nextTodo }), [props.nextTodo]);

  const onChange = evt => {
    const val = evt.target.value;
    name.nameText = val;
    setName({ ...name });
  };
  const title = name.id === "" ? "Create new Todo" : "Edit Todo"
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={name.nameText} onChange={onChange} />
        <br/><br/>
        <button onClick={saveName} className="btn btn-info">Save</button>
      </form>
      {name.id !== "" && <p>Editing todo with</p>}
    </div>
  );
}
export default NewName;

NewName.propTypes = {
  nextTodo: PropTypes.object,
  addTodo: PropTypes.func
}

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

  useEffect(() => setName({ ...props.nextName }), [props.nextName]);

  const onChange = evt => {
    const val = evt.target.value;
    name.nameText = val;
    setName({ ...name });
  };
  const title = name.id === "" ? "Create new Name" : "Edit Name"
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
  nextName: PropTypes.object,
  addName: PropTypes.func
}

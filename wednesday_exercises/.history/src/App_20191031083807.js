import React, {useState} from "react";
 
const NameForm = () => {
  const initState = {name: "john"};

  const [person,setPerson] = useState(initState);
  const handleChange = (ev) => {
    const target = ev.target;
    const id = target.id;
    const value = id.value;
    person[id] = value;
    //setPerson({...person})
    setPerson({...person, [id]: value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(JSON.stringify(person));
    setPerson(initState);
  }
 
  return (
    <div>
      <form>
        <label>
          Name:
          <input id="name" type="text" onChange={handleChange} placeholder="Name"/>
        </label>
        <button onClick={handleSubmit}> Submit </button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
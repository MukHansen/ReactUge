import React, {useState} from "react";
 
const NameForm = () => {
  const initState = {name: "", age:};

  const [person,setName] = useState("");
  const handleChange = (ev) => {
    const target = ev.target;
    const id = target.id;
    const value = id.value;
    setName({...person, [id]: value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(JSON.stringify(person));
  }
 
  return (
    <div>
      <form>
        <label>
          Name:
          <input id="name" type="text" value={person.name} placeholder="Name" onChange={handleChange}/>
        </label>
        <input onClick={handleSubmit} type="submit" value="Submit" />
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
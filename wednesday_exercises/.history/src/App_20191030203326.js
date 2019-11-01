import React, {useState} from "react";
 
const NameForm = () => {

  const [name,setName] = useState("");
  const handleChange = (ev) => {
    const newName = ev.target.id.value;
    setName({...newName})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(JSON.stringify(name));
  }
 
  return (
    <div>
      <form>
        <label>
          Name:
          <input id="nameField" type="text" value={name.name} placeholder="Name" onChange={handleChange}/>
        </label>
        <input onClick={handleSubmit} type="submit" value="Submit" />
      </form>
      <p>{JSON.stringify(name)}</p>
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
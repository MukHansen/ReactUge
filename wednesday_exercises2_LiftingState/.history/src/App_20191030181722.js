import React, {useState} from "react";
 
const NameForm = () => {
  const [name,setName] = useState("");
  const handleChange = (ev) => {
    const target = ev.target;
    const id = target.id;
    const value = target.value;
    name[id] = value;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(JSON.stringify(name));
  }
 
  return (
    <div>
      <form onClick={handleSubmit} onChange={handleChange}>
        <label>
          Name:
          <input id="name" type="text" value={name} placeholder="Name"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {name}
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

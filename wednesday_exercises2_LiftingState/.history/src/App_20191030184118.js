import React, {useState} from "react";
 
const NameForm = () => {
  const initState = {""}

  const [name,setName] = useState(initState);
  const handleChange = (ev) => {
    const target = ev.target;
    const id = target.id;
    const value = target.value;
    name[id] = value;
    setName({...name})
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
          <input id="name" type="text" value={name} placeholder="Name" onChange={handleChange}/>
        </label>
        <input onClick={handleSubmit} type="submit" value="Submit" />
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

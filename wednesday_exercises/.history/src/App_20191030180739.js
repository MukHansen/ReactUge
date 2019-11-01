import React, {useState} from "react";
 
const NameForm = () => {
  const [name,setName] = useState("");
  const handleChange(event) {}
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(JSON.stringify(name));
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" />
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

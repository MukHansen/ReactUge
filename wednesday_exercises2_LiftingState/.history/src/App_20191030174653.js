import React, {useState} from "react";
 
const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {}
  function handleSubmit(event) {}
 
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

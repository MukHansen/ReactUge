import React, {useState} from 'react';

const FormDemo = () => {
  const initialState = {name: "", age: null, email: ""};
 
  const [person, setPerson] = useState(initialState)
  const handleSubmit = (evt) => {}

  const handleInput = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value

  }
  
  return (
    <div style={{marginTop:25}}>
      <form onSubmit={handleSubmit} >
        <input id="name" type="text" 
               placeholder="Name" />
        <br/>
        <input id="age" type="number" 
               placeholder="Age" />
        <br/>
        <input id="email" type="text" 
                placeholder="email" />
        <br/>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default FormDemo;
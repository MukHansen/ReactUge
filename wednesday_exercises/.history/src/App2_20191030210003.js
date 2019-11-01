import React, {useState} from 'react';

const FormDemo = () => {
  const initialState = {name: "", age: null, email: ""};
 
  const [person, setPerson] = useState(initialState)
  const handleSubmit = (evt) => {}

  const handleInput = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value
    person[id] = value;
    setPerson({...person})

  }
  
  return (
    <div style={{marginTop:25}}>
      <form onSubmit={handleSubmit} >
        <input id="name" type="text" onChange={handleInput} 
               placeholder="Name" />
        <br/>
        <input id="age" type="number" onChange={handleInput} 
               placeholder="Age" />
        <br/>
        <input id="email" type="text" onChange={handleInput} 
                placeholder="email" />
        <br/>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default FormDemo;
import React, {useState} from 'react';

const FormDemo = () => {
  const initialState = {name: "", age: null, email: ""};
 
  const [person, setPerson] = useState(initialState)
  const handleSubmit = (evt) => {
    evt.preventDefault();
    window.alert(JSON.stringify(person));
    setPerson(initialState);
  }

  const handleInput = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value
    person[id] = value;
    setPerson({...person})

  }
  
  return (
    <div style={{marginTop:25}}>
      <form onSubmit={handleSubmit} onChange={handleInput} >
        <input id="name" type="text" value={person.name}
               placeholder="Name" />
        <br/>
        <input id="age" type="number" value={person.age} 
               placeholder="Age" />
        <br/>
        <input id="email" type="text" value={person.email} 
                placeholder="email" />
        <br/>
        <button >Submit</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
}

export default FormDemo;
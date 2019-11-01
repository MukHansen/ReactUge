import React, {useState} from "react";
import "./App.css";
import NameList from "./NameList"
import NewName from "./NewName"
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), nameText: "Peter" },
    { id: uuid(), nameText: "Ole" },
    { id: uuid(), nameText: "Jan" }
  ]
  const [names, setNames] = useState(initialData);
  const [newName, setNewName] = useState({ id: "", nameText: "" });
  console.log(names)

  const addTodo = name => {
    if (name.id === "") { // id=-1 Indicates a new object
      name.id = uuid();
      names.push(name);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let nameEdit = names.find(t => t.id === name.id);
      nameEdit.nameText = name.nameText;
    }
    setNames([...names]);
    setNewName({id:"", nameText:""})
  };

  const deleteName = (index) => {
    setNames(names.filter(todos => index !== todos.id));
  //  const refTodos = todos.splice(index);
  //  setTodos([...refTodos]);
  }
  const editName = (index) => {
    console.log("edit---------------->")
     setNewName(names.find(name => name.id === index));
  }

  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <NameList 
          todos={names} 
          deleteTodo={deleteName}
          editTodo={editName}
          />
        </div>
        <div className="col-5 new-todo">
          <NewName
            addTodo={addTodo}
            nextTodo={newName}            
          />
        </div>
      </div>
    </div>
  );
}
export default App;

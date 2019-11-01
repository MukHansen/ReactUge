import React, {useState} from "react";
import "./App.css";
import TodoList from "./TodoList"
import NewName from "./NewName"
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), todoText: "Peter" },
    { id: uuid(), todoText: "Ole" },
    { id: uuid(), todoText: "Jan" }
  ]
  const [names, setNames] = useState(initialData);
  const [newName, setNewName] = useState({ id: "", nameText: "" });
  console.log(names)

  const addTodo = todo => {
    if (todo.id === "") { // id=-1 Indicates a new object
      todo.id = uuid();
      names.push(todo);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let todoToEdit = names.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    setNames([...names]);
    setNewName({id:"", nameText:""})
  };

  const deleteTodo = (index) => {
    setNames(names.filter(todos => index !== todos.id));
  //  const refTodos = todos.splice(index);
  //  setTodos([...refTodos]);
  }
  const editTodo = (index) => {
    console.log("edit---------------->")
     setNewName(names.find(todo => todo.id === index));
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
          deleteTodo={deleteTodo}
          editTodo={editTodo}
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

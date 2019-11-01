import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Lars from "./LarsVideoEksempel";


let app = <App/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">1.Forms and Controlled Components</a> &nbsp;
         <a href="/"  className="x" id="Lars">Lars video Eksempel</a> &nbsp;
         
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "Lars": app = <Lars />; break;

    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

let app = <App/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">1.List and Keys 1</a> &nbsp;
         <a href="/"  className="x" id="app2">2.List and Keys continued</a> &nbsp;
         <a href="/"  className="x" id="app3">1.State and Events Count</a> &nbsp;
         <a href="/"  className="x" id="app4">2.State and Events Time</a> &nbsp;
         <a href="/"  className="x" id="app4">3.State and Events Jokes</a> &nbsp;

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
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "app4": app = <App4 />; break;
        case "app5": app = <App5 />; break;

    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));

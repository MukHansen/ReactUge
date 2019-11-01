import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";

function App({ apiFacade }) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await apiFacade.getPersonsV2();
        console.log("--> ", data);
        setPersons(data);
      } 
      catch (e) {
        window.alert("Jeg har et blåt båthorn");
        console.log("fisk.whatever");
      }
    };
    getData();
  }, []);

  /* useEffect(() => {
    //This would be a great place to fetch data (all persons) from the backend
    apiFacade.getPersons()
    .then(data=>{
      console.log("her er data -> ", data);
      setPersons(data);
    }).catch(e=>{alert("Upsedasse")})
  },[10000]); */

  const storeAddEditPerson = person => {
    const postData = async () => {
      try{
        console.log("storeAddEditPerson func");
        const promise = apiFacade.addEditPerson(person);
        console.log("this is the promise" + promise);
        const data = await apiFacade.getPersonsV2();
        setPersons(data);
      }catch(e){
        window.alert("Error " + e);
      }
    }
     postData();   
    //Call this from the AddEditPerson control with the person to Add or Edit and Add/Edit via the apiFacade
  };

  const deletePerson = id => {
    const postData = async () => {
      try{
        console.log("deletePerson func");
        const promise = apiFacade.deletePerson(id);
        console.log("this is the promise" + promise);
        const data = await apiFacade.getPersonsV2();
        setPersons(data);
      }catch(e){
        window.alert("Error " + e);
      }
    }
     postData();  
    //Call this from the AllPerson control with the id for the person to delete
  };

  const editPerson = person => {
    //Call thisfrom the AllPerson control with the  person to edit
    //Set the state variable personToAddEdit with this person (a clone) to make the new value flow down via props
  };

  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            storeAddEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;

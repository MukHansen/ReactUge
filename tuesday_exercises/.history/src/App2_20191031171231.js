import React, {useState} from "react";
 
function MemberTable({ members }) {
  const {mems} = members;
  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Age</th></tr>
      </thead>
      <tbody>
              {mems.map((mem) => (
                <tr>
                  <td>{mem.name}</td>
                  <td>{mem.age}</td>
                </tr>
              ))}
      </tbody>
      {console.log("MemberTable ----------- func" + JSON.stringify(members))}
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      {console.log("MemberDemo ----------- props" + JSON.stringify(props))}
      <MemberTable members={props}/>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}


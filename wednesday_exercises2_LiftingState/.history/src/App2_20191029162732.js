import React, {useState} from "react";
 
function MemberTable({ members }) {
  return (
    <table>
      <thead>All members</thead>
      <tbody>{members.toSstring()}</tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>{MemberTable}</h4>
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


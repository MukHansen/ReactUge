import React, {useState} from "react";
 
function MemberTable({ members }) {
  return (
    <table>
      <thead>All members</thead>
      <tbody>{members.toString()}</tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
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


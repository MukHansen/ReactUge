import React from 'react';
import PropTypes from 'prop-types';

const NameList = ({ todos, deleteTodo, editTodo: editName }) => {
  return (
    <React.Fragment>
      <h2>All Names</h2>
      <ul>
        {todos.map(name => (
          <li key={name.id}>{name.nameText}  
          <a href="#/" onClick= {
          (e)=>{e.preventDefault();
          deleteTodo(name.id);
        }
          }> (delete </a> 
        <a href="#/" onClick= {()=>editName(name.id)}>, edit) </a>
        </li>

        ))}
      </ul>
    </React.Fragment>
  );
};
export default NameList;

NameList.propTypes = {
  todos: PropTypes.array
}

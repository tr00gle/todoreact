import React from 'react';

const TodoList = (props) => {
  return (
    <div>
      {props.list.map((todo, id) => {
        return (
          <div key={`todo${id}`}>
            {todo} 
            <button onClick={() => props.modifyTodo(id)}>Modify</button> 
            <button onClick={() => props.deleteTodo(id)}>Delete</button> 
          </div>
        )
      })}
    </div>
  )
}

export default TodoList;
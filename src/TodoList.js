import React from 'react';

const TodoList = (props) => {
  const todos = [];
  props.list.forEach((todo, index) => {
    if (todo.completed === false) {
      todos.push(
        <div key={`todo${index}`}>
          {todo.todoText}
          <button onClick={() => props.completeTodo(index)}>Complete</button>
          <button onClick={() => props.modifyTodo(index)}>Modify</button>
          <button onClick={() => props.deleteTodo(index)}>Delete</button>
        </div>
      );
    }
  });
  return (
    <div>
      <h3>My Current Todos</h3>
      {todos}
    </div>
  )
}

export default TodoList;
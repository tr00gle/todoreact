import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import CompletedTodoList from './CompletedTodoList';

class App extends Component {
  constructor(props) {
    super();
    this.state = { 
      list: [],
      inputText: ''
    };

    this.addTodo = this.addTodo.bind(this);
    this.modifyTodo = this.modifyTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addTodo(this.state.inputText);
  }

  addTodo(todoText) {
    const { list } = this.state;
    const todo = {
      todoText,
      completed: false
    }
    list.push(todo);
    this.setState({ 
      list, 
      inputText: ''
    });
  }

  modifyTodo(index) {
    const { list } = this.state;
    const { todoText }  = list[index];
    list.splice(index, 1);
    this.setState({
      list,
      inputText: todoText
    });
  }

  deleteTodo(index) {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({ list });
  }

  completeTodo(index) {
    let { list } = this.state;
    const todo = list[index]
    todo.completed = true;
    list = [...list.slice(0, index), {...todo}, ...list.slice(index + 1)]
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <h1>Super Awesome Todo List</h1>
        <AddTodo 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          inputText={this.state.inputText} 
          />
        <TodoList 
          list={this.state.list} 
          deleteTodo={this.deleteTodo} 
          modifyTodo={this.modifyTodo} 
          completeTodo={this.completeTodo}
          />
        <CompletedTodoList  list={this.state.list} />
      </div>
    );
  }
}

export default App;

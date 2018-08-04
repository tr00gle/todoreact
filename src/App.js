import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }


  addTodo(value) {
    const list = this.state.list;
    list.push(value);
    this.setState({ list: list });
  }

  modifyTodo(index) {
    const todoModify = this.state.list[index];

  }

  deleteTodo(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
  }

  render() {
    console.log(this.state.list);

    return (
      <div>
        <h1>Super Awesome Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList list={this.state.list} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

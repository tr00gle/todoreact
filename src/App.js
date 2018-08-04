import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };

    this.addTodoList = this.addTodoList.bind(this);
  }

  addTodoList(value) {
    const list = this.state.list;
    list.push(value);
    this.setState({ list: list });
  }

  render() {
    console.log(this.state.list);

    return (
      <div>
        <AddTodo addTodoList={this.addTodoList} />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;

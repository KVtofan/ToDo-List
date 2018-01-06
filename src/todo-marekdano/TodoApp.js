import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
// import todoItems from './todoItems';
import JSONdate from './../data.json';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {todoItems: JSONdate.tasks};

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
  }

  addItem(todoItem) {
    JSONdate.tasks.unshift({
      index: JSONdate.tasks.length+1,
      value: todoItem.newItemValue,
      done: false
    });

    this.setState({ todoItems: JSONdate.tasks });
  }

  removeItem(itemIndex) {
    JSONdate.tasks.splice(itemIndex, 1);
    this.setState({ todoItems: JSONdate.tasks });
  }

  markTodoDone(itemIndex) {
    let todo = JSONdate.tasks[itemIndex];
    JSONdate.tasks.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? JSONdate.tasks.push(todo) : JSONdate.tasks.unshift(todo);

    this.setState({ todoItems: JSONdate.tasks });
  }

  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.props.initItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;

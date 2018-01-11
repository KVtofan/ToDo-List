import React, { Component } from 'react';
import TodoList from './TodoList';
import AddItemForm from './../AddItemForm';
import JSONdate from './../../data.json';

class Tasks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todoItems: JSONdate.tasks
    }

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
      <div className="tasks">
        <AddItemForm addItem={this.addItem} target={'To-Do'}/>
        <br />
        <TodoList items={this.props.items}
                  filterText={this.props.filterText}
                  done={this.props.done}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
        />
      </div>
    )
  }
}

export default Tasks;

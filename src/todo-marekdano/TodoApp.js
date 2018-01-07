import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import SearchBar from './SearchBar';
import JSONdate from './../data.json';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: JSONdate.tasks,
      filterText: '',
      done: true
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleDoneChange = this.handleDoneChange.bind(this);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleDoneChange(done) {
    this.setState({
      done: done
    })
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
        <hr />
        <SearchBar
          filterText={this.state.filterText}
          done={this.state.done}
          onFilterTextChange={this.handleFilterTextChange}
          onDoneChange={this.handleDoneChange}
        />
        <TodoHeader />
        <TodoForm addItem={this.addItem} />
        <br />
        <TodoList items={this.props.initItems}
                  filterText={this.state.filterText}
                  done={this.state.done}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
        />
        <hr />
      </div>
    );
  }
}

export default TodoApp;

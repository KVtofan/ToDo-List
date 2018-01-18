import React, { Component } from 'react';
import TaskList from './TaskList';
import EditTask from './EditTask';
import AddItemForm from './../AddItemForm';
import JSONdate from './../../data.json';

class Tasks extends Component{
  constructor(props) {
    super(props);

    this.state = {
      taskList: JSONdate.tasks,
      elementToEditIndex : undefined
    }
  }

  addItem = (todoItem) => {
    JSONdate.tasks.unshift({
      category: this.props.category,
      value: todoItem.newItemValue,
      done: false,
      description: 'Description'
    });

    this.setState({ taskList: JSONdate.tasks });
  }

  removeItem = (itemIndex) => {
    JSONdate.tasks.splice(itemIndex, 1);
    this.setState({ taskList: JSONdate.tasks });
  }

  editItem = (editedTask) => {
    JSONdate.tasks.splice(this.state.elementToEditIndex, 1, editedTask);
    this.setState({ taskList: JSONdate.tasks });
  }

  handleEditItem = (itemIndex) => {
    this.setState({ elementToEditIndex: itemIndex });
    this.props.handleToggleEditMode(true);
  }

  markTodoDone = (itemIndex) => {
    let todo = JSONdate.tasks[itemIndex];
    JSONdate.tasks.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? JSONdate.tasks.push(todo) : JSONdate.tasks.unshift(todo);

    this.setState({ taskList: JSONdate.tasks });
  }

  render() {
    if (!this.props.editMode) {
      return (
          <div className="tasks">
            <AddItemForm addItem={this.addItem} target={'To-Do'}/>
            <br />
            <TaskList items={this.props.items}
                      filterText={this.props.filterText}
                      done={this.props.done}
                      category={this.props.category}
                      removeItem={this.removeItem}
                      markTodoDone={this.markTodoDone}
                      handleEditItem={this.handleEditItem}
            />
          </div>
      )
    } else {
      return (
        <EditTask editItem={this.editItem}
          elementToEdit={this.state.taskList[this.state.elementToEditIndex]}
          handleToggleEditMode={this.props.handleToggleEditMode}
        />
      );
    }
  }
}

export default Tasks;

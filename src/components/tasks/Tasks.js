import React, { Component } from 'react';
import TaskList from './TaskList';
import EditTaskContainer from './../../containers/EditTaskContainer';
import AddItemForm from './../AddItemForm';

class Tasks extends Component{
  render() {
    if (!this.props.editMode) {
      return (
          <div className="tasks">
            <AddItemForm addItem={this.props.addItem} target={'To-Do'}/>
            <br />
            <TaskList items={this.props.items}
                      filterText={this.props.filterText}
                      done={this.props.done}
                      category={this.props.category}
                      removeItem={this.props.removeItem}
                      markTodoDone={this.props.markTodoDone}
                      handleEditItem={this.props.handleEditItem}
            />
          </div>
      )
    } else {
      return (
        <EditTaskContainer editItem={this.props.editItem}
                  elementToEdit={this.props.elementToEdit}
                  handleToggleEditMode={this.props.handleToggleEditMode}
        />
      );
    }
  }
}

export default Tasks;

import React, { Component } from 'react';
import EditTask from './../components/tasks/EditTask';

class EditTaskContainer extends Component {
  constructor(props) {
    super(props);
    let element= this.props.elementToEdit;

    this.state = {
      category: element.category,
      value: element.value,
      done: element.done,
      description: element.description
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleTaskNameChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleDoneChange = (e) => {
    this.setState({
      done: e.target.checked
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleSaveChanges = () => {
    this.props.editItem(this.state);
    this.props.handleToggleEditMode(false);
  }

  handleCancel = () => {
    this.props.handleToggleEditMode(false);
  }

  render() {
    return(
      <EditTask
        handleSubmit={this.handleSubmit}
        handleSaveChanges={this.handleSaveChanges}
        handleCancel={this.handleCancel}
        handleTaskNameChange={this.handleTaskNameChange}
        handleDoneChange={this.handleDoneChange}
        handleDescriptionChange={this.handleDescriptionChange}

        value={this.state.value}
        done={this.state.done}
        description={this.state.description}
      />
    );
  }
}

export default EditTaskContainer;

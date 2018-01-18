import React, { Component } from 'react';

class EditTask extends Component {
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
    return (
      <div className="editTask">
        <div className="editControls">
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleSaveChanges}>
            Save changes
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
        <form className="editTaskForm">
          <input type="text"
                 className="form-control"
                 value={this.state.value}
                 onChange={this.handleTaskNameChange}
          />
          <label>
            <input
              type="checkbox"
              className="form-check-input"
              checked={this.state.done}
              onChange={this.handleDoneChange}
            />
            Done
          </label>
          <textarea value={this.state.description}
                    className="form-control"
                    onChange={this.handleDescriptionChange}
          />
        </form>
      </div>
    );
  }
}

export default EditTask;

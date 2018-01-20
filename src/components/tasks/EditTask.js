import React, { Component } from 'react';

class EditTask extends Component {
  render() {
    return (
      <div className="editTask">
        <div className="editControls">
          <button
            type="button"
            className="btn btn-light"
            onClick={this.props.handleSaveChanges}>
            Save changes
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.props.handleCancel}>
            Cancel
          </button>
        </div>
        <form className="editTaskForm"
              onSubmit={this.props.handleSubmit}>
          <input type="text"
                 className="form-control"
                 value={this.props.value}
                 onChange={this.props.handleTaskNameChange}
          />
          <label>
            <input
              type="checkbox"
              className="form-check-input"
              checked={this.props.done}
              onChange={this.props.handleDoneChange}
            />
            Done
          </label>
          <textarea value={this.props.description}
                    className="form-control"
                    onChange={this.props.handleDescriptionChange}
          />
        </form>
      </div>
    );
  }
}

export default EditTask;

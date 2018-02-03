import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditTask extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleSaveChanges = e => {
    this.props.handleSaveChanges(this.props.categoryId, this.props.elementToEdit);
  }

  handleTaskNameChange = (e) => {
    this.props.handleChangeTask('name', e.target.value);
  }

  handleDoneChange = (e) => {
    this.props.handleChangeTask('done', e.target.checked);
  }

  handleDescriptionChange = (e) => {
    this.props.handleChangeTask('description', e.target.value);
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
            onClick={this.props.handleCancelEditing}>
            Cancel
          </button>
        </div>
        <form className="editTaskForm"
              onSubmit={this.handleSubmit}>
          <input type="text"
                 className="form-control"
                 value={this.props.elementToEdit.name}
                 onChange={this.handleTaskNameChange}
          />
          <label>
            <input
              type="checkbox"
              className="form-check-input"
              checked={this.props.elementToEdit.done}
              onChange={this.handleDoneChange}
            />
            Done
          </label>
          <textarea value={this.props.elementToEdit.description}
                    className="form-control"
                    onChange={this.handleDescriptionChange}
          />
        </form>
      </div>
    );
  }
}

EditTask.propTypes = {
  elementToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,

  categoryId: PropTypes.number.isRequired,

  handleChangeTask: PropTypes.func.isRequired,
  handleSaveChanges: PropTypes.func.isRequired,
  handleCancelEditing: PropTypes.func.isRequired,
}

export default EditTask;

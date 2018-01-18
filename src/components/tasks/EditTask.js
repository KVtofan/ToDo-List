import React, { Component } from 'react';

class EditTask extends Component {
  render() {
    return (
      <div className="editTask">
        <div className="editControls">
          <button
            type="button"
            className="btn btn-light">
            Save changes
          </button>
          <button
            type="button"
            className="btn btn-light">
            Cancel
          </button>
        </div>
        <form className="editTaskForm">
          <input type="text"
                 className="form-control"
          />
          <label>
            <input
              type="checkbox"
              className="form-check-input"

            />
            Done
          </label>
          <textarea value="Description"
                    className="form-control"
          />
        </form>
      </div>
    );
  }
}

export default EditTask;

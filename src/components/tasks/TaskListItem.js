import React from 'react';
import PropTypes from 'prop-types';

const TaskListItem = ({
  item,
  index,
  chosenCategoryId,
  handleToggleTask,
  handleEnableEditMode }) => {

  this.toggleTask = e => {
    e.stopPropagation();
    handleToggleTask(chosenCategoryId, index)
  }

  this.editTask = e => {
    e.stopPropagation();
    handleEnableEditMode(item, chosenCategoryId);
  }

  return (
    <li className="list-group-item">
        <input
          type="checkbox"
          checked={item.done}
          onChange={this.toggleTask}
        />
        { item.name }
        <button
          type="button"
          className="edit btn btn-light"
          onClick={this.editTask}>
          <i className="fa fa-pencil-square-o"></i>
        </button>
    </li>
  );
}

TaskListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,

  index: PropTypes.number.isRequired,
  chosenCategoryId: PropTypes.number.isRequired,

  handleToggleTask: PropTypes.func.isRequired,
  handleEnableEditMode: PropTypes.func.isRequired,
}

export default TaskListItem;

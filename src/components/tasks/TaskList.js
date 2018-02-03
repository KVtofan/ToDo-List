import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem';

const TaskList = ({
  tasks,
  chosenCategoryId,
  handleToggleTask,
  handleEnableEditMode }) => {
  return (
      <ul className="list-group">
        {tasks.map( (item, index) =>
          <TaskListItem
            key={index} item={item} index={index}
            chosenCategoryId={chosenCategoryId}
            handleToggleTask={handleToggleTask}
            handleEnableEditMode={handleEnableEditMode}
          />
        )}
      </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,

  chosenCategoryId: PropTypes.number.isRequired,

  handleToggleTask: PropTypes.func.isRequired,
  handleEnableEditMode: PropTypes.func.isRequired,
}

export default TaskList;

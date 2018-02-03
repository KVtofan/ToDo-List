import React from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import EditTaskContainer from './../../containers/EditTaskContainer';
import AddItemForm from './../AddItemForm';

const Tasks =({
  tasks,
  chosenCategoryId,
  editMode,
  handleAddTask,
  handleToggleTask,
  handleEnableEditMode }) => {

  if (editMode) {
    return (
      <div className="tasks">
        <EditTaskContainer />
      </div>
    );
  }

  return (
    <div className="tasks">
      <AddItemForm
        handleAddItem={handleAddTask}
        chosenCategoryId={chosenCategoryId}
        target={'Category'}
      />
    <br />
      { (tasks && tasks.length)
        ? <TaskList
            tasks={tasks}
            chosenCategoryId={chosenCategoryId}
            handleToggleTask={handleToggleTask}
            handleEnableEditMode={handleEnableEditMode}
          />
        : <h2 className="noTasks">There are no tasks in this category</h2>
      }
    </div>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,

  chosenCategoryId: PropTypes.number.isRequired,
  editMode: PropTypes.bool.isRequired,

  handleAddTask: PropTypes.func.isRequired,
  handleToggleTask: PropTypes.func.isRequired,
  handleEnableEditMode: PropTypes.func.isRequired,
}

export default Tasks;

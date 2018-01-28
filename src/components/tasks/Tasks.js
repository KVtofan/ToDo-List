import React from 'react';
import TaskList from './TaskList';
import EditTaskContainer from './../../containers/EditTaskContainer';
import AddItemForm from './../AddItemForm';

const Tasks =({ tasks, chosenCategoryId, handleAddTask, handleToggleTask }) => {
  return (
    <div className="tasks">
      <AddItemForm
        handleAddItem={handleAddTask}
        chosenCategoryId={chosenCategoryId}
        target={'Category'}
      />
      <TaskList
        tasks={tasks}
        chosenCategoryId={chosenCategoryId}
        handleToggleTask={handleToggleTask}
      />
    </div>
  )
}

export default Tasks;

import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tasks, handleToggleTask, chosenCategoryId }) => {
  return (
    <ul className="list-group">
      {tasks.map( (item, index) =>
        <TaskListItem
          key={index} item={item} index={index}
          chosenCategoryId={chosenCategoryId}
          handleToggleTask={handleToggleTask}
        />
      )}
    </ul>
  )
}

export default TaskList;

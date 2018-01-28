import React from 'react';

const TaskListItem = ({ item, index, handleToggleTask, chosenCategoryId }) => {

  this.toggleTask = e => {
    e.stopPropagation();
    handleToggleTask(chosenCategoryId, item.id)
  }

  return (
    <li className="list-group-item">
      <div className='undone'>
        <input
          type="checkbox"
          checked={item.done}
          onChange={this.toggleTask}
        />
        { item.name }
      </div>
    </li>
  );
}

export default TaskListItem;

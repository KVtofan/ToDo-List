import {
  ADD_CATEGORY, REMOVE_CATEGORY, RENAME_CATEGORY, MOVE_TASK, ADD_SUBCATEGORY,
  ADD_TASK, TOGGLE_TASK, CHANGE_TASK
} from '../constants';
import {
  markTaskDone, overwriteTask,
 } from '../utils';

export const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return addCategory(state, action);
    case REMOVE_CATEGORY:
      return removeCategory(state, action);
    case RENAME_CATEGORY:
      return renameCategory(state, action);
    case ADD_SUBCATEGORY:
      return addCategory(state, action);
    case ADD_TASK:
      return addTask(state, action);
    case TOGGLE_TASK:
      return toggleTask(state, action);
    case CHANGE_TASK:
      return changeTask(state, action);
    case MOVE_TASK:
      return moveTask(state, action);
    default:
      return state;
  }
}

const addCategory = (state, action) => {
  return [
    {
      id: action.id,
      ancestorId: action.ancestorId,
      name: action.categoryName,
      tasks: [],
    },
    ...state
  ];
}

const removeCategory = (state, action) => {
    return state.filter(category =>
      category.id !== action.id
    );
}

const renameCategory = (state, action) => {
  return state.map(category =>
    (category.id === action.item.id)
    ? {...category, name: action.newCategoryName}
    : category
  );
}

const addTask = (state, action) => {
  return state.map(category =>
    (category.id === action.categoryId)
    ? {...category, tasks: [
        {id: action.taskId, name: action.taskName, done: false, description: ''},
         ...category.tasks,
        ]
      }
    : category
  );
}

const toggleTask = (state, action) => {
  return  state.map(category =>
    (category.id === action.categoryId)
    ? {...category, tasks: markTaskDone(category.tasks, action.index) }
    : category
  );
}

const changeTask = (state, action) => {
  return state.map(category =>
    (category.id === action.categoryId)
    ? {...category, tasks: overwriteTask(category.tasks, action.newTask)}
    : category
  )
}

const moveTask = (state, action) => {
  if (action.ancestorId === action.categoryToMoveId) {
    return state;
  }

  let newTask;

  let newState = state.map(category =>
    (category.id === action.ancestorId)
    ? {...category, tasks: category.tasks.filter(task => {
      if (task.id !== action.taskId) {
        return true;
      }
      newTask = task; 
      return false;
    }), }
    : category
  );

  return addTask(newState, {
    taskId: newTask.id,
    categoryId: action.categoryToMoveId,
    taskName: newTask.name,
  });
}

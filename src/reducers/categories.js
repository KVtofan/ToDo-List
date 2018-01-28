import {
  ADD_CATEGORY, REMOVE_CATEGORY, RENAME_CATEGORY, ADD_SUBCATEGORY,
  ADD_TASK, TOGGLE_TASK,
} from '../constants';

export const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return addCategory(state, action);
    case REMOVE_CATEGORY:
      return removeCategory(state, action);
    case RENAME_CATEGORY:
      return renameCategory(state, action);
    case ADD_SUBCATEGORY:
      return addSubcategory(state, action);
    case ADD_TASK:
      return addTask(state, action);
    case TOGGLE_TASK:
      return toggleTask(state, action);
    default:
      return state;
  }
}

const addCategory = (state, action) => {
  return [
    {
      id: action.id,
      name: action.categoryName,
      tasks: [],
      subCategories:[],
    },
    ...state
  ];
}

const removeCategory = (state, action) => {
    let newState = state.slice();
    newState.splice(action.itemIndex, 1);
    return newState;
}

const renameCategory = (state, action) => {
  return state.map(category =>
    (category.id === action.item.id)
    ? {...category, name: action.newCategoryName}
    : category
  );
}

const addSubcategory = (state, action) => {
  return state.map(category =>
    (category.id === action.categoryId)
    ? {...category, subCategories: [
        {id: action.subCategoryId, name: action.subCategoryName, tasks: [], subCategories:[]},
         ...category.subCategories,
        ]
      }
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
    ? {...category, tasks: category.tasks.map(task=>
        (task.id === action.id)
        ? {...task, done: !task.done}
        : task)
      }
    : category
  );
}

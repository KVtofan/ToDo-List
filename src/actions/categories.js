import {
  ADD_CATEGORY, REMOVE_CATEGORY, RENAME_CATEGORY, MOVE_TASK
} from '../constants';

let nextCategoryId = 5;

export const addCategory = (ancestorId, categoryName) => ({
  type: ADD_CATEGORY,
  id: nextCategoryId++,
  ancestorId,
  categoryName,
})

export const removeCategory = (id) => ({
  type: REMOVE_CATEGORY,
  id
})

export const renameCategory = (item, newCategoryName) => ({
  type: RENAME_CATEGORY,
  item,
  newCategoryName
})

export const moveTask = (taskId, ancestorId, categoryToMoveId) => ({
  type: MOVE_TASK,
  taskId, //  Можно передавать весь элемент
  ancestorId,
  categoryToMoveId
})

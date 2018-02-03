import {
  ADD_TASK, TOGGLE_TASK
} from '../constants';

let nextTaskId = 3;

export const addTask = (categoryId, taskName) => ({
  type: ADD_TASK,
  taskId: nextTaskId++,
  categoryId,
  taskName
})

export const toggleTask = (categoryId, index) => ({
  type: TOGGLE_TASK,
  categoryId,
  index
})

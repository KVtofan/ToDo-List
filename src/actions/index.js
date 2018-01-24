import {
  SET_DONE_FILTER, SET_SEARCH_FILTER, SET_CATEGORY_FILTER,  SET_EDIT_MODE,
  ADD_TASK, TOGGLE_TASK, ADD_CATEGORY, TOGGLE_CATEGORY
} from '../constants';

let nextTaskId = 0;
let nextCategoryId = 0;

export const setDoneFilter = (done) => ({
  type: SET_DONE_FILTER,
  done
})

export const setSearchFilter = (search) => ({
  type: SET_SEARCH_FILTER,
  search
})

export const setCategoryFilter = (category) => ({
  type: SET_CATEGORY_FILTER,
  category
})

export const addTask = (taskName) => ({
  type: ADD_TASK,
  id: nextTaskId++,
  taskName
})

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id
})

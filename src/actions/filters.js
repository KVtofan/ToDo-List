import {
  SET_DONE_FILTER, SET_SEARCH_FILTER, SET_CATEGORY_FILTER
} from '../constants';

export const setSearchFilter = (search) => ({
  type: SET_SEARCH_FILTER,
  search
})

export const setDoneFilter = (done) => ({
  type: SET_DONE_FILTER,
  done
})

export const setCategoryFilter = (chosenCategoryId) => ({
  type: SET_CATEGORY_FILTER,
  chosenCategoryId
})

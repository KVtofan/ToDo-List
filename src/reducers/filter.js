import {
  SET_SEARCH_FILTER, SET_DONE_FILTER, SET_CATEGORY_FILTER
} from '../constants';

export const filter = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return {
      ...state,
      search: action.search,
      }
    case SET_DONE_FILTER:
      return {
      ...state,
      done: !state.done,
      }
      case SET_CATEGORY_FILTER:
        return {
        ...state,
        chosenCategoryId: action.chosenCategoryId,
        }
    default:
      return state;
  }
}

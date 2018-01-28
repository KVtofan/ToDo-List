import {
  CHOOSE_CATEGORY
} from '../constants';

export const chosenCategoryId = (state = 0, action) => {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      return action.categoryId;
    default:
      return state;
  }
}

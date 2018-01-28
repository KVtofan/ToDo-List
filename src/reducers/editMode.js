import {
  SET_EDIT_MODE
} from '../constants';

export const editMode = (state = false, action) => {
  switch (action.type) {
    case SET_EDIT_MODE:
      return action.editMode;
    default:
      return state;
  }
}

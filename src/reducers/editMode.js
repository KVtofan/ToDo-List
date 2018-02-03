import {
  RUN_EDIT_MODE, EDIT_TASK
} from '../constants';

export const editMode = (state = {}, action) => {
  switch (action.type) {
    case RUN_EDIT_MODE:
      return action.newEditMode;
    case EDIT_TASK:
      return {
        ...state,
        elementToEdit: editTask(state.elementToEdit, action),
      }
    case 'FINISH_EDIT_MODE':
      return action.newEditMode;
    default:
      return state;
  }
}

const editTask = (elementToEdit, action) => {
  switch (action.fieldToEdit) {
    case 'name':
      return {...elementToEdit, name: action.newFieldValue}
    case 'done':
      return {...elementToEdit, done: !elementToEdit.done}
    case 'description':
      return {...elementToEdit, description: action.newFieldValue}
    default:
      return elementToEdit;
  }
}

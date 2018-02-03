import {
  RUN_EDIT_MODE, EDIT_TASK, CHANGE_TASK
} from '../constants';

export const startEditMode = (item, chosenCategoryId) => ({
  type: RUN_EDIT_MODE,
  newEditMode: {
    isActive: true,
    elementToEdit: item,
    ancestorId: chosenCategoryId,
  }
});

export const editTask = (fieldToEdit, newFieldValue = '') => ({
  type: EDIT_TASK,
  fieldToEdit,
  newFieldValue
});

export const saveChangedTask = (categoryId, newTask) => ({
  type: CHANGE_TASK,
  categoryId,
  newTask,
})

// TODO: Объединить startEditMode и finishEditMode в один экшен и один обработчик
export const finishEditMode = () => ({
  type: 'FINISH_EDIT_MODE',
  newEditMode: {
    isActive: false,
    elementToEdit: null,
    ancestorId: 0,
  }
});

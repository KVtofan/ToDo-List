import { connect } from 'react-redux'
import { editTask, saveChangedTask, finishEditMode } from '../actions/editMode'
import EditTask from './../components/tasks/EditTask';

const mapStateToProps = (state) => ({
  elementToEdit: state.editMode.elementToEdit,
  categoryId: state.editMode.ancestorId,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeTask: (fieldToEdit, newFieldValue) => {
    dispatch(editTask(fieldToEdit, newFieldValue));
  },
  handleSaveChanges: (categoryId, newTask) => {
    dispatch(saveChangedTask(categoryId, newTask));
    dispatch(finishEditMode());
  },
  handleCancelEditing: () => {
    dispatch(finishEditMode());
  },
});

const EditTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTask);

export default EditTaskContainer;

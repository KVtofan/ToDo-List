import { connect } from 'react-redux'
import { addTask, toggleTask } from '../actions/tasks'
import { startEditMode } from '../actions/editMode'
import Tasks from '../components/tasks/Tasks'
import { findCategoryById } from '../utils'

const getVisibleTasks = (categories, filter) => {
  if (!filter.chosenCategoryId) { return; }

  const chosenCategory = findCategoryById(categories, filter.chosenCategoryId);

  if (chosenCategory) {
    return chosenCategory.tasks.filter( item =>
      item.name.indexOf(filter.search) !== -1 && !(item.done && !filter.done)
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state.categories, state.filter),
  chosenCategoryId: state.filter.chosenCategoryId,
  editMode: state.editMode.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddTask: (categoryId, taskName) => {
    dispatch(addTask(categoryId, taskName));
  },
  handleToggleTask: (categoryId, taskId) => {
    dispatch(toggleTask(categoryId, taskId));
  },
  handleEnableEditMode: (item, chosenCategoryId) => {
    dispatch(startEditMode(item, chosenCategoryId));
  },
});

const TasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

export default TasksContainer;

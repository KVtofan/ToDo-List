import { connect } from 'react-redux'
import { addTask, toggleTask } from '../actions/tasks'
import Tasks from '../components/tasks/Tasks'
import { bfs } from '../utils'

const getVisibleTasks = (categories, filter) => {
  if (!filter.chosenCategoryId) { return; }

  const chosenCategory = bfs(categories, filter.chosenCategoryId);

  const filterFunction = (item) => {
    if (item.name.indexOf(filter.search) === -1 ||
        (item.done && !filter.done)) {
      return false;
    }

    return true;
  };

  if (chosenCategory) {
    return chosenCategory.tasks.filter(filterFunction);
  }
}

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state.categories, state.filter),
  chosenCategoryId: state.filter.chosenCategoryId,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddTask: (categoryId, taskName) => {
    dispatch(addTask(categoryId, taskName));
  },
  handleToggleTask: (categoryId, taskId) => {
    dispatch(toggleTask(categoryId, taskId));
  }
});

const TasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

export default TasksContainer;

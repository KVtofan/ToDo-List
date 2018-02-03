import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  addCategory,
  removeCategory,
  renameCategory,
  moveTask
} from '../actions/categories'
import { finishEditMode } from '../actions/editMode'
import { setCategoryFilter } from '../actions/filters'

import SingleCategory from '../components/categories/SingleCategory'

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.category,
  editMode: state.editMode,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveCategory: (itemId) => {
    dispatch(removeCategory(itemId));
  },
  handleRenameCategory: (item, newItemName) => {
    dispatch(renameCategory(item, newItemName));
  },
  handleChooseCategory: (chosenCategoryId) => {
    dispatch(setCategoryFilter(chosenCategoryId));
  },
  handleAddSubcategory: (subCategoryId, subCategoryName) => {
    dispatch(addCategory(subCategoryId, subCategoryName));
  },
  handleMoveTaskToCategory: (taskId, ancestorId, categoryToMoveId) => {
    dispatch(moveTask(taskId, ancestorId, categoryToMoveId));
    dispatch(finishEditMode());
  }
});

const SingleCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCategory);

SingleCategoryContainer.propTypes = {
  category: PropTypes.object.isRequired,
}

export default SingleCategoryContainer;

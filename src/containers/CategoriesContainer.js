import { connect } from 'react-redux'
import { addCategory, removeCategory, renameCategory, chooseCategory, addSubcategory } from '../actions/categories'
import { setCategoryFilter } from '../actions/filters'
import Categories from '../components/categories/Categories'

const mapStateToProps = (state) => ({
  categories: state.categories,
  editMode: state.editMode,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddCategory: (categoryName) => {
    dispatch(addCategory(categoryName));
  },
  handleRemoveCategory: (itemIndex) => {
    dispatch(removeCategory(itemIndex));
  },
  handleRenameCategory: (item, newItemName) => {
    dispatch(renameCategory(item, newItemName));
  },
  handleChooseCategory: (chosenCategoryId) => {
    dispatch(setCategoryFilter(chosenCategoryId));
  },
  handleAddSubcategory: (subCategoryId, subCategoryName) => {
    dispatch(addSubcategory(subCategoryId, subCategoryName));
  }
})

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default CategoriesContainer;

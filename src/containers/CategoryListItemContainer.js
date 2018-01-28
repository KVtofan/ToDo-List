import { connect } from 'react-redux'
import {  } from '../actions/'
import Categories from '../components/categories/CategoryListItem'

const mapStateToProps = (state, ownProps) => ({
  items: ownProps.item.subCategories,
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
  handleChooseCategory: (categoryId) => {
    dispatch(chooseCategory(categoryId));
  },
  handleAddSubcategory: (subCategoryId, subCategoryName) => {
    dispatch(addSubcategory(subCategoryId, subCategoryName));
  }
})

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default CategoriesContainer

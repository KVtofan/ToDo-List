import { connect } from 'react-redux'
import { addCategory } from '../actions/categories'
import Categories from '../components/categories/Categories'

const mapStateToProps = (state) => ({
  categories: state.categories,
  editMode: state.editMode.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddCategory: (categoryName, ancestorId) => {
    dispatch(addCategory(categoryName, ancestorId));
  },
});

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default CategoriesContainer;

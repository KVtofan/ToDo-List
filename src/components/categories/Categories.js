import React from 'react';
import PropTypes from 'prop-types';
import AddItemForm from './../AddItemForm';
import CategoryList from './CategoryList';

const Categories = ({
  categories, editMode,
  handleAddCategory, handleRemoveCategory, handleRenameCategory, handleChooseCategory, handleAddSubcategory }) => {
  return (
    <div className="categories">
      { !editMode &&
        <AddItemForm handleAddItem={handleAddCategory} target={'Category'}/>
      }
      <br />
      <CategoryList
        items={categories}
        handleRemoveCategory={handleRemoveCategory}
        handleRenameCategory={handleRenameCategory}
        handleChooseCategory={handleChooseCategory}
        handleAddSubcategory={handleAddSubcategory}
      />
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    subCategories: PropTypes.array.isRequired,
  }).isRequired).isRequired,
  handleAddCategory: PropTypes.func.isRequired,
  handleRemoveCategory: PropTypes.func.isRequired,
  handleRenameCategory: PropTypes.func.isRequired,
  handleChooseCategory: PropTypes.func.isRequired,
  handleAddSubcategory: PropTypes.func.isRequired
}

export default Categories;

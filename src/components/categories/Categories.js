import React from 'react';
import PropTypes from 'prop-types';
import AddItemForm from './../AddItemForm';
import CategoryList from './CategoryList';

const Categories = ({
  categories,
  editMode,
  handleAddCategory }) => {
  return (
    <div className="categories">
      { !editMode &&
        <AddItemForm handleAddItem={handleAddCategory} target={'Category'}/>
      }
      <br />
      <CategoryList
        categories={categories}
      />
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
  }).isRequired).isRequired,
  editMode: PropTypes.bool.isRequired,
  handleAddCategory: PropTypes.func.isRequired,
}

export default Categories;

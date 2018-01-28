import React from 'react';
import PropTypes from 'prop-types';
// import CategoryListItemContainer from './../../containers/CategoryListItemContainer';
import SingleCategory from './SingleCategory';

const CategoryList = ({ items, handleRemoveCategory, handleRenameCategory, handleChooseCategory, handleAddSubcategory }) => (
  <ul className="category-list list-group">
    {items.map( (item, index) =>
      <SingleCategory
        key={index} item={item} index={index}
        handleRemoveCategory={handleRemoveCategory}
        handleRenameCategory={handleRenameCategory}
        handleChooseCategory={handleChooseCategory}
        handleAddSubcategory={handleAddSubcategory}
      />
    )}
  </ul>
);

CategoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    subCategories: PropTypes.array.isRequired,
  }).isRequired).isRequired,
  handleRemoveCategory: PropTypes.func.isRequired,
  handleRenameCategory: PropTypes.func.isRequired,
  handleChooseCategory: PropTypes.func.isRequired,
  handleAddSubcategory: PropTypes.func.isRequired,
}

export default CategoryList;

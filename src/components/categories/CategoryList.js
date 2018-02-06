import React from 'react';
import PropTypes from 'prop-types';
import CategoryLIstItem from './CategoryListItem';

const CategoryList = ({
  categories,
  ancestorId = 0 }) => (
  <ul className="category-list list-group">
    {categories.filter(category => category.ancestorId === ancestorId).map(
      category =>
        <CategoryLIstItem
          key={category.id} category={category}
          categories={categories}
          />
    )}
  </ul>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
  }).isRequired).isRequired,
  ancestorId: PropTypes.number,
}

export default CategoryList;

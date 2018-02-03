import React from 'react';
import PropTypes from 'prop-types';
import SingleCategoryContainer from '../../containers/SingleCategoryContainer';
import CategoryList from './CategoryList';

const CategoryLIstItem = ({
  category,
  categories }) => (
    <div>
      <SingleCategoryContainer
        category={category}
      />
      <li className="subcategories">
        <CategoryList
          ancestorId={category.id}
          categories={categories}
        />
      </li>
    </div>
);

CategoryLIstItem.propTypes = {
  category: PropTypes.object.isRequired,
  categories:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
  }).isRequired).isRequired,
}

export default CategoryLIstItem;

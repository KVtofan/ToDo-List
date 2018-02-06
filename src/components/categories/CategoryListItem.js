import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleCategoryContainer from '../../containers/SingleCategoryContainer';
import CategoryList from './CategoryList';

class CategoryLIstItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSubcategories: false,
    }
  }

  handleShowSubcategories = (e) => {
    e.stopPropagation();

    let showSubcategories = !this.state.showSubcategories;
    this.setState({ showSubcategories: showSubcategories });
  }

  render() {
    let showButtonClass = "fa fa-chevron-" +
    (this.state.showSubcategories ? "up" : "down");

    return (
      <div>
        <SingleCategoryContainer
          category={this.props.category}
          handleShowSubcategories={this.handleShowSubcategories}
          showButtonClass={showButtonClass}
        />
      { this.state.showSubcategories &&
        <li className="subcategories">
          <CategoryList
            ancestorId={this.props.category.id}
            categories={this.props.categories}
          />
        </li>
      }
      </div>
    );
  }
}

CategoryLIstItem.propTypes = {
  category: PropTypes.object.isRequired,
  categories:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
  }).isRequired).isRequired,
}

export default CategoryLIstItem;

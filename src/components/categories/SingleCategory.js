import React from 'react';
import PropTypes from 'prop-types';

const SingleCategory = ({
  item, index,
  handleRemoveCategory, handleRenameCategory, handleChooseCategory, handleAddSubcategory}) => {
    this.removeCategory = (e) => {
      e.stopPropagation();
      handleRemoveCategory(index);
    };
    this.renameCategory = (e) => {
      e.stopPropagation();
      let newCategoryName  = prompt('Enter the name of the Category', item.name);
      if (newCategoryName) handleRenameCategory(item, newCategoryName);
    };
    this.chooseCategory = (e) => {
      e.stopPropagation();
      handleChooseCategory(item.id);
    }
    this.addSubcategory = e => {
      e.stopPropagation();
      let newSubcategoryName  = prompt('Enter the name of the new Subategory', 'new Subcategory');
      if (newSubcategoryName) handleAddSubcategory(item.id, newSubcategoryName);
    }
    return (
      <li className="list-group-item singleCategory"
          onClick={this.chooseCategory}
      >
        <p>{item.name}</p>
        <button
          type="button"
          className="editCategoryName"
          onClick={this.renameCategory}>
          <i className="fa fa-pencil-square-o"></i>
        </button>
        <button
            type="button"
            className="addSubcategory"
            onClick={this.addSubcategory}>
            +
          </button>
          <button
            type="button"
            className="RemoveCategory"
            onClick={this.removeCategory} >
            <i className="fa fa-trash-o"></i>
          </button>
      </li>
    )
}

SingleCategory.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleRemoveCategory: PropTypes.func.isRequired,
  handleRenameCategory: PropTypes.func.isRequired,
  handleChooseCategory: PropTypes.func.isRequired,
  handleAddSubcategory: PropTypes.func.isRequired,
}
export default SingleCategory;

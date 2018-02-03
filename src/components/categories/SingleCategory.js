import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleCategory extends Component {
  removeCategory = e => {
    e.stopPropagation();
    if (window.confirm("Are you sure?")) {
      this.props.handleRemoveCategory(this.props.category.id);
    }
  }

  renameCategory = e => {
    e.stopPropagation();
    let newCategoryName  = prompt('Enter the name of the Category', this.props.category.name);
    if (newCategoryName) {
      this.props.handleRenameCategory(this.props.category, newCategoryName);
    }
  }

  chooseCategory = e => {
    e.stopPropagation();
    this.props.handleChooseCategory(this.props.category.id);
  }

  addSubcategory = e => {
    e.stopPropagation();
    let newSubcategoryName  = prompt('Enter the name of the new Subategory', 'new Subcategory');
    if (newSubcategoryName) {
      this.props.handleAddSubcategory(this.props.category.id, newSubcategoryName);
    }
  }

  moveTaskToCategory = e => {
    e.stopPropagation();
    this.props.handleMoveTaskToCategory(
      this.props.editMode.elementToEdit.id, this.props.editMode.ancestorId, this.props.category.id
    );
  }

  render() {
    return(
      <li className="list-group-item singleCategory"
          onClick={this.chooseCategory}>
        <div className="categoryItem">
            <button
              type="button"
              className="showSubcategories"
              onClick={this.props.handleShowSubcategories}>
              <i className="fa fa-chevron-down"></i>
            </button>
          <p>{this.props.category.name}</p>
        </div>
        { !this.props.editMode.isActive
          ? <div className="categoryControlls">
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
                <i>+</i>
              </button>
              <button
                type="button"
                className="RemoveCategory"
                onClick={this.removeCategory}>
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          : <div className="categoryControlls">
              <button
                type="button"
                className="move"
                onClick={this.moveTaskToCategory}>
                <i className="fa fa-long-arrow-left"></i>
              </button>
            </div>
        }
      </li>
    );
  }
}

SingleCategory.propTypes = {
  category: PropTypes.object.isRequired,
  editMode: PropTypes.object.isRequired,
  handleRemoveCategory: PropTypes.func.isRequired,
  handleRenameCategory: PropTypes.func.isRequired,
  handleChooseCategory: PropTypes.func.isRequired,
  handleAddSubcategory: PropTypes.func.isRequired,
}

export default SingleCategory;

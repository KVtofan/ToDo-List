import React, { Component } from 'react';

class SingleCategory extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveCategory = this.handleRemoveCategory.bind(this);
    this.handleEditCategoryName = this.handleEditCategoryName.bind(this);
    this.handleChooseCategory = this.handleChooseCategory.bind(this);
  }

  handleRemoveCategory(e) {
    e.stopPropagation();

    let index = parseInt(this.props.index, 10);
    this.props.removeItem(index);
  }

  handleEditCategoryName(e) {
    e.stopPropagation();

    let index = parseInt(this.props.index, 10);
    this.props.editCategoryName(index);
  }

  handleChooseCategory(e) {
    e.stopPropagation();

    let index = parseInt(this.props.index, 10);
    this.props.handleChooseCategory(index);
  }

  render() {
    return(
      <li className="list-group-item" onClick={this.handleChooseCategory}>
        <button
          type="button"
          className="showSubcategories"
          onClick={this.props.handleShowSubcategories}>
          <i className={this.props.showButtonClass}></i>
        </button>
        {this.props.item.value}
        <button
          type="button"
          className="editCategoryName"
          onClick={this.handleEditCategoryName}>
          <i className="fa fa-pencil-square-o"></i>
        </button>
        <button
          type="button"
          className="close"
          onClick={this.handleRemoveCategory}>
          &#128465;
        </button>
        <button
          type="button"
          className="addSubcategory"
          onClick={this.props.handleAddSubcategory}>
          +
        </button>
      </li>
    );
  }
}

export default SingleCategory;

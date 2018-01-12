import React, { Component } from 'react';
import CategoryList from './CategoryList'

class CategoryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategoryList: this.props.item.subcategories,
      showSubcategories: false,
    }

    this.onClickRemove = this.onClickRemove.bind(this);
    this.handleEditCategoryName = this.handleEditCategoryName.bind(this);
    this.handleChooseCategory = this.handleChooseCategory.bind(this);

    this.handleAddSubcategory = this.handleAddSubcategory.bind(this);
    this.handleRemoveSubcategory = this.handleRemoveSubcategory.bind(this);
    this.handleEditSubcategoryName = this.handleEditSubcategoryName.bind(this);
    this.handleShowSubcategories = this.handleShowSubcategories.bind(this);
    this.handleChooseSubcategory = this.handleChooseSubcategory.bind(this);
  }

  onClickRemove(e) {
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

  handleAddSubcategory(e) {
    e.stopPropagation();
    if (!this.state.subcategoryList) return;

    let subcategoryList = this.state.subcategoryList;
    let subcategoryItem  = prompt('Enter the name of the new subcategory', 'New Subcategory');

    subcategoryList.unshift({
      value: subcategoryItem,
    });

    this.setState({ subcategoryList: subcategoryList });
  }

  handleRemoveSubcategory(itemIndex) {
    let subcategoryList = this.state.subcategoryList;

    subcategoryList.splice(itemIndex, 1);
    this.setState({ subcategoryList: subcategoryList });
  }

  handleEditSubcategoryName(itemIndex) {
    let newCategoryName  = prompt('Enter the name of the Subcategory', 'New subcategory name');
    let subcategoryList = this.state.subcategoryList;

    if (newCategoryName) {
      subcategoryList[itemIndex].value = newCategoryName;;
      this.setState({ subcategoryList: subcategoryList });
    }
  }

  handleShowSubcategories(e) {
    e.stopPropagation();

    let showSubcategories = !this.state.showSubcategories;
    this.setState({ showSubcategories: showSubcategories });
  }

  handleChooseSubcategory(itemIndex) {
    this.props.handleChooseCategory(this.state.subcategoryList[itemIndex].value);
  }

  render () {
    let showButtonClass = "fa fa-chevron-" +
        (this.state.showSubcategories ? "up" : "down");

    return (
      <div>
        <li className="list-group-item" onClick={this.handleChooseCategory}>
          <button
            type="button"
            className="showSubcategories"
            onClick={this.handleShowSubcategories}>
            <i className={showButtonClass}></i>
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
            onClick={this.onClickRemove}>
            &#128465;
          </button>
          <button
            type="button"
            className="addSubcategory"
            onClick={this.handleAddSubcategory}>
            +
          </button>
        </li>
        {(this.state.showSubcategories && this.props.item.subcategories) &&
          <li className="list-group-item">
            <CategoryList items={this.props.item.subcategories}
                          removeItem={this.handleRemoveSubcategory}
                          editCategoryName={this.handleEditSubcategoryName}
                          handleChooseCategory={this.handleChooseSubcategory}
            />
          </li>
        }
      </div>
    );
  }
}

export default CategoryListItem;

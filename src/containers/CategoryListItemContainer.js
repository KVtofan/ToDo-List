import React, { Component } from 'react';
import CategoryListItem from './../components/categories/CategoryListItem';

class CategoryListItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subcategoryList: this.props.item.subcategories,
      showSubcategories: false,
    }
  }

  handleAddSubcategory = (e) => {
    e.stopPropagation();
    if (!this.state.subcategoryList) return;

    let subcategoryList = this.state.subcategoryList;
    let subcategoryItem  = prompt('Enter the name of the new subcategory', 'New Subcategory');

    subcategoryList.unshift({
      value: subcategoryItem,
    });

    this.setState({ subcategoryList: subcategoryList });
  }

  handleRemoveSubcategory = (itemIndex) => {
    let subcategoryList = this.state.subcategoryList;

    subcategoryList.splice(itemIndex, 1);
    this.setState({ subcategoryList: subcategoryList });
  }

  handleEditSubcategoryName = (itemIndex) => {
    let newCategoryName  = prompt('Enter the name of the Subcategory', 'New subcategory name');
    let subcategoryList = this.state.subcategoryList;

    if (newCategoryName) {
      subcategoryList[itemIndex].value = newCategoryName;;
      this.setState({ subcategoryList: subcategoryList });
    }
  }

  handleShowSubcategories = (e) => {
    e.stopPropagation();

    let showSubcategories = !this.state.showSubcategories;
    this.setState({ showSubcategories: showSubcategories });
  }

  handleChooseSubcategory = (itemIndex) => {
    this.props.handleChooseCategory(this.state.subcategoryList[itemIndex].value);
  }

  render() {
    return (
      <CategoryListItem
        item={this.props.item}
        index={this.props.index}

        removeItem={this.props.removeItem}
        editCategoryName={this.props.editCategoryName}
        handleChooseCategory={this.props.handleChooseCategory}

        handleAddSubcategory={this.handleAddSubcategory}
        handleShowSubcategories={this.handleShowSubcategories}

        showSubcategories={this.state.showSubcategories}
        handleRemoveSubcategory={this.handleRemoveSubcategory}
        handleEditSubcategoryName={this.handleEditSubcategoryName}
        handleChooseSubcategory={this.handleChooseSubcategory}

        editMode={this.props.editMode}
      />
    );
  }
}

export default CategoryListItemContainer;

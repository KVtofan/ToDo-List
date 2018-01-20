import React, { Component } from 'react';
import CategoryList from './CategoryList'
import SingleCategory from './SingleCategory';

class CategoryListItem extends Component {
  render () {
    let showButtonClass = "fa fa-chevron-" +
        (this.props.showSubcategories ? "up" : "down");

    return (
      <div>
        <SingleCategory
          item={this.props.item} index={this.props.index}
          removeItem={this.props.removeItem}
          editCategoryName={this.props.editCategoryName}
          handleChooseCategory={this.props.handleChooseCategory}
          handleShowSubcategories={this.props.handleShowSubcategories}
          handleAddSubcategory={this.props.handleAddSubcategory}
          showButtonClass={showButtonClass}
          editMode={this.props.editMode}
        />
      {(this.props.showSubcategories &&
          this.props.item.subcategories) &&
          <li className="subcategories">
            <CategoryList items={this.props.item.subcategories}
                          removeItem={this.props.handleRemoveSubcategory}
                          editCategoryName={this.props.handleEditSubcategoryName}
                          handleChooseCategory={this.props.handleChooseSubcategory}
                          editMode={this.props.editMode}
            />
          </li>
        }
      </div>
    );
  }
}

export default CategoryListItem;

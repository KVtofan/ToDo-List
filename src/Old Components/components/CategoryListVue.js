import React, { Component } from 'react';
import CategoryListItemContainer from './../../containers/CategoryListItemContainer';

class CategoryList extends Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <CategoryListItemContainer
                          key={index} item={item} index={index}

                          removeItem={this.props.removeItem}
                          editCategoryName={this.props.editCategoryName}
                          handleChooseCategory={this.props.handleChooseCategory}
                          editMode={this.props.editMode}
        />
      );
    });

    return (
      <ul className="category-list list-group"> {items} </ul>
    );
  }
}

export default CategoryList;

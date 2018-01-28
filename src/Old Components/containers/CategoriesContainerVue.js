import React, { Component } from 'react';
import Categories from './../components/categories/Categories';
import JSONdate from './../data.json';

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: JSONdate.categories
    }
  }

  addCategory = (categoryItem) => {
    JSONdate.categories.unshift({
      value: categoryItem.newItemValue,
    });

    this.setState({ categoryList: JSONdate.categories });
  }

  removeCategory = (itemIndex) => {
    JSONdate.categories.splice(itemIndex, 1);
    this.setState({ categoryList: JSONdate.categories });
  }

  editCategoryName = (itemIndex) => {
    let newCategoryName  = prompt('Enter the name of the Category', JSONdate.categories[itemIndex].value);
    if (newCategoryName) {
      JSONdate.categories[itemIndex].value = newCategoryName;;
      this.setState({ categoryList: JSONdate.categories });
    }
  }

  handleChooseCategory = (value) => {
    (typeof value === 'number') ?
    this.props.handleChooseCategory(JSONdate.categories[value].value) :
    this.props.handleChooseCategory(value);
  }

  render() {
    return(
      <Categories
        addCategory={this.addCategory}
        items={this.props.items}
        removeCategory={this.removeCategory}
        editCategoryName={this.editCategoryName}
        handleChooseCategory={this.handleChooseCategory}
        editMode={this.props.editMode}
      />
    );
  }
}

export default CategoriesContainer;

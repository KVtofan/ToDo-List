import React, { Component } from 'react';
import AddItemForm from './../AddItemForm';
import CategoryList from './CategoryList'
import JSONdate from './../../data.json';

class Categories extends Component {
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
    return (
      <div className="categories">
        { !this.props.editMode &&
        <AddItemForm addItem={this.addCategory} target={'Category'}/>
        }
        <br />
        <CategoryList items={this.props.items}
                      removeItem={this.removeCategory}
                      editCategoryName={this.editCategoryName}
                      handleChooseCategory={this.handleChooseCategory}
                      editMode={this.props.editMode}
        />
      </div>
    )
  }
}

export default Categories;

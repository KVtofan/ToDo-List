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

    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }

  addCategory(categoryItem) {
    JSONdate.categories.unshift({
      index: JSONdate.categories.length+1,
      value: categoryItem.newItemValue,
    });

    this.setState({ categoryList: JSONdate.categories });
  }

  removeCategory(itemIndex) {
    JSONdate.categories.splice(itemIndex, 1);
    this.setState({ categoryList: JSONdate.categories });
  }

  render() {
    return (

      <div className="categories">
        <AddItemForm addItem={this.addCategory} target={'Category'}/>
        <br />
        <CategoryList items={this.props.items}
                      removeItem={this.removeCategory}
        />
      </div>
    )
  }
}

export default Categories;

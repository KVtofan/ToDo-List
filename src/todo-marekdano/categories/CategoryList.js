import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem'; 

class CategoryList extends Component{
  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <CategoryListItem key={index} item={item} imdex={index}
                          removeItem={this.props.removeItem}
        />
      );
    });

    return (
      <ul className="category-list"> {items} </ul>
    )
  }
}

export default CategoryList

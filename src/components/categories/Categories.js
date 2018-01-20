import React, { Component } from 'react';
import AddItemForm from './../AddItemForm';
import CategoryList from './CategoryList'

class Categories extends Component {
  render() {
    return (
      <div className="categories">
        { !this.props.editMode &&
          <AddItemForm addItem={this.props.addCategory} target={'Category'}/>
        }
        <br />
        <CategoryList items={this.props.items}
                      removeItem={this.props.removeCategory}
                      editCategoryName={this.props.editCategoryName}
                      handleChooseCategory={this.props.handleChooseCategory}
                      editMode={this.props.editMode}
        />
      </div>
    )
  }
}

export default Categories;

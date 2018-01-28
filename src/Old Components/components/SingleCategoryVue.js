import React, { Component } from 'react';

class SingleCategory extends Component {
  handleRemoveCategory = (e) => {
    e.stopPropagation();

    let index = parseInt(this.props.index, 10);
    this.props.removeItem(index);
  }

  handleEditCategoryName = (e) => {
    e.stopPropagation();

    let index = parseInt(this.props.index, 10);
    this.props.editCategoryName(index);
  }

  handleChooseCategory = (e) => {
    e.stopPropagation();

    let index = parseInt(this.props.index, 10);
    this.props.handleChooseCategory(index);
  }

  render() {
    return(
      <li className="list-group-item singleCategory"
          onClick={this.handleChooseCategory}>
        <div className="categoryItem">
          { this.props.item.subcategories &&
            <button
              type="button"
              className="showSubcategories"
              onClick={this.props.handleShowSubcategories}>
              <i className={this.props.showButtonClass}></i>
            </button>
          }
          {this.props.item.value}
          { !this.props.editMode &&
            <button
              type="button"
              className="editCategoryName"
              onClick={this.handleEditCategoryName}>
              <i className="fa fa-pencil-square-o"></i>
            </button>
          }
        </div>
        <div className="categoryControlls">
          { !this.props.editMode &&
            <button
              type="button"
              className="RemoveCategory"
              onClick={this.handleRemoveCategory}>
              <i className="fa fa-trash-o"></i>
            </button>
            // { this.props.item.subcategories &&
            //   <button
            //     type="button"
            //     className="addSubcategory"
            //     onClick={this.props.handleAddSubcategory}>
            //     +
            //   </button>
            // }
          }
          { this.props.editMode &&
            <button
              type="button"
              className="move">
              <i className="fa fa-long-arrow-left"></i>
            </button>
          }
        </div>
      </li>
    );
  }
}

export default SingleCategory;
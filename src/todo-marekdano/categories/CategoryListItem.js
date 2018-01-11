import React, { Component } from 'react';

class CategoryListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickRemove() {
    let index = parseInt(this.props.index, 10);
    this.props.removeItem(index);
  }

  render () {
    return (
      <li>
        {this.props.item.value}
        <button
          type="button"
          className="close"
          onClick={this.onClickRemove}>
          &times;
        </button>
      </li>
    );
  }
}

export default CategoryListItem;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItemForm extends Component{
  onSubmit = (event) => {
    event.preventDefault();
    let newItemValue = this.refs.itemName.value;

    if(newItemValue) {
      (this.props.chosenCategoryId)
        ? this.props.handleAddItem(this.props.chosenCategoryId ,newItemValue)
        : this.props.handleAddItem(newItemValue);
      this.refs.form.reset();
    }
  }

  render() {
    let placeholder = "Add a new " + this.props.target;

    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName"     className="form-control"
               placeholder={placeholder}
        />
        <button type="submit" className="btn btn-default">Add</button>
      </form>
    );
  }
}

AddItemForm.propTypes = {
  target: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired
}

export default AddItemForm;

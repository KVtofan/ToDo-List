import React, { Component } from 'react';
import TodoApp from './../components/TodoApp'

class TodoAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      done: true,
      category: '',
      editMode: false,
    }
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  handleShowDoneChange = (done) => {
    this.setState({
      done: done
    })
  }

  handleChooseCategory = (categoryName) => {
    this.setState({
      category: categoryName
    })
  }

  handleToggleEditMode = (editMode) => {
    this.setState({
      editMode: editMode
    })
  }

  render() {
    return (
      <TodoApp
        editMode={this.state.editMode}

        filterText={this.state.filterText}
        done={this.state.done}
        category={this.state.category}
        handleFilterTextChange={this.handleFilterTextChange}
        handleShowDoneChange={this.handleShowDoneChange}

        items={this.props.items}
        handleChooseCategory={this.handleChooseCategory}

        handleToggleEditMode={this.handleToggleEditMode}
      />
    );
  }
}

export default TodoAppContainer;

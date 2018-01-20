import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import SearchBar from './SearchBar';
import Tasks from './tasks/Tasks';
import Categories from './categories/Categories';

class TodoApp extends Component {
  render() {
    return (
      <div id="main">
        <header>
          <TodoHeader />
          { !this.props.editMode &&
            <SearchBar
              filterText={this.props.filterText}
              done={this.props.done}
              category={this.props.category}
              onFilterTextChange={this.props.handleFilterTextChange}
              onDoneChange={this.props.handleShowDoneChange}
            />
          }
        </header>
        <hr />
        <main>
          <Categories
            items={this.props.items.categories}
            handleChooseCategory={this.props.handleChooseCategory}
            editMode={this.props.editMode}
          />
            <Tasks
              items={this.props.items.tasks}
              filterText={this.props.filterText}
              done={this.props.done}
              category={this.props.category}
              editMode={this.props.editMode}
              handleToggleEditMode={this.props.handleToggleEditMode}
            />
        </main>
      </div>
    );
  }
}

export default TodoApp;

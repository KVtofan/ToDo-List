import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import SearchBarContainer from './../containers/SearchBarContainer';
import TasksContainer from './../containers/TasksContainer';
import CategoriesContainer from './../containers/CategoriesContainer';

class TodoApp extends Component {
  render() {
    return (
      <div id="main">
        <header>
          <TodoHeader />
          { !this.props.editMode &&
            <SearchBarContainer />
          }
        </header>
        <hr />
        <main>
          <CategoriesContainer />
          <TasksContainer /> 
        </main>
      </div>
    );
  }
}

export default TodoApp;

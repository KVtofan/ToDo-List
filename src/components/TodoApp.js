import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import SearchBarContainer from './../containers/SearchBarContainer';
import TasksContainer from './../containers/TasksContainer';
import CategoriesContainer from './../containers/CategoriesContainer';
import ProgressBarContainer from './../containers/ProgressBarContainer';

class TodoApp extends Component {
  render() {
    return (
      <div id="main">
        <header>
          <TodoHeader />
          <SearchBarContainer />
        </header>
        <ProgressBarContainer />
        <br />
        <main>
          <CategoriesContainer />
          <TasksContainer />
        </main>
      </div>
    );
  }
}

export default TodoApp;

import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import SearchBar from './SearchBar';
import Tasks from './tasks/Tasks';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      done: true
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleShowDoneChange = this.handleShowDoneChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleShowDoneChange(done) {
    this.setState({
      done: done
    })
  }

  render() {
    return (
      <div id="main">
        <hr />
        <SearchBar
          filterText={this.state.filterText}
          done={this.state.done}
          onFilterTextChange={this.handleFilterTextChange}
          onDoneChange={this.handleShowDoneChange}
        />
        <TodoHeader />
        <Tasks
          items={this.props.initItems}
          filterText={this.state.filterText}
          done={this.state.done}
        />
        <hr />
      </div>
    );
  }
}

export default TodoApp;

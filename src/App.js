import React, { Component } from 'react';
import TodoApp from './todo-marekdano/TodoApp';
import JSONdate from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp initItems={JSONdate}/>
      </div>
    );
  }
}

export default App;

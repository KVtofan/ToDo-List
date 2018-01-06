import React, { Component } from 'react';
import Clock from './components/Clock';
import TodoApp from './todo-official/TodoApp';
// import JSONdate from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">Hello World!</p>
        <Clock />
        <TodoApp />
      </div>
    );
  }
}

export default App;

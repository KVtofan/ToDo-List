import React, { Component } from 'react';
import TodoAppContainer from '../containers/TodoAppContainer';
import JSONdate from '../data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoAppContainer items={JSONdate} />
      </div>
    );
  }
}

export default App;

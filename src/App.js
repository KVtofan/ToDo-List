import React, { Component } from 'react';
import Clock from './components/Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">Hello World!</p>
        <Clock />
      </div>
    );
  }
}

export default App;

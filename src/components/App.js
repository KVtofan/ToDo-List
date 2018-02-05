import React, { Component } from 'react';
import TodoApp from './TodoApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <TodoApp />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

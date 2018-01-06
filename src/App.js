import React, { Component } from 'react';
import Clock from './components/Clock';
import TodoApp from './todo-marekdano/TodoApp';
import todoItems from './todo-marekdano/todoItems';
import JSONdate from './data.json';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   giveData();
  // }

  render() {
    return (
      <div className="App">
        <p className="App-intro">Hello World!</p>
        <Clock />
        {/*}<TodoApp /> */}
        <TodoApp initItems={JSONdate.tasks}/>
      </div>
    );
  }
}

export default App;

// function giveData() {
//   console.log(JSONdate.tasks);
// }

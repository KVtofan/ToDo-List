import React, { Component } from 'react';
import Clock from './components/Clock';
import TodoApp from './todo-marekdano/TodoApp';
import JSONdate from './data.json';

import FilterableProductTable from './search/FilterableProductTable';
import PRODUCTS from './search/productsData';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   giveData();
  // }

  render() {
    return (
      <div className="App">
        {/*
          <p className="App-intro">Hello World!</p>
        <Clock />
        */}
        <TodoApp initItems={JSONdate.tasks}/>
        <FilterableProductTable products ={PRODUCTS} />
      </div>
    );
  }
}

export default App;

// function giveData() {
//   console.log(JSONdate.tasks);
// }

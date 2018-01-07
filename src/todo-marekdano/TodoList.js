import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component{
  render() {
    const filterText = this.props.filterText;
    const done = this.props.done;
    let items = [];

    this.props.items.forEach((item, index) => {
      if (item.value.indexOf(filterText) === -1) {
        return;
      }
      if (!done && item.done) {
        return;
      }

      items.push(
        <TodoListItem key={index} item={item} index={index}
          removeItem={this.props.removeItem}
          markTodoDone={this.props.markTodoDone}
        />
      );
    });

    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

export default TodoList;

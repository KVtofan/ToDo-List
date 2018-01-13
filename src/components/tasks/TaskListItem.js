import React, { Component } from 'react';

class TaskListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDone() {
    let index = parseInt(this.props.index, 10);
    this.props.markTodoDone(index);
  }

  onClickClose() {
    let index = parseInt(this.props.index, 10);
    this.props.removeItem(index);
  }

  render () {
    let todoClass = this.props.item.done ?
        'done' : 'undone';

    return (
      <li className="list-group-item">
        <div className={todoClass}>
          <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={this.onClickDone}
          />
          {this.props.item.value}
          <button
            type="button"
            className="close"
            onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

export default TaskListItem;

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleDoneChange = this.handleDoneChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleDoneChange(e) {
    this.props.onDoneChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      <p>
        <input
          type="checkbox"
          checked={this.props.done}
          onChange={this.handleDoneChange}
        />
        {' '}
        Show done
      </p>
      </form>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleShowDoneChange = this.handleShowDoneChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleShowDoneChange(e) {
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
        <label>
          <input
            type="checkbox"
            checked={this.props.done}
            onChange={this.handleShowDoneChange}
          />
          Show done
        </label>
      </p>
      </form>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      done: true
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleDoneChange = this.handleDoneChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleDoneChange(done) {
    this.setState({
      done: done
    })
  }

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar
          filterText={this.state.filterText}
          done={this.state.done}
          onFilterTextChange={this.handleFilterTextChange}
          onDoneChange={this.handleDoneChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          done={this.state.done}
        />
      </div>
    );
  }
}

export default FilterableProductTable;

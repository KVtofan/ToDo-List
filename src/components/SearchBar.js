import React from 'react';
import PropTypes from 'prop-types'

const SearchBar = ({
  searchText,
  done,
  editMode,
  handleChangeSearch,
  handleChangeDone,
  }) => {
  if (editMode) {
    return null;
  }
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="searchBar form-inline"
    >
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={e=> handleChangeDone(e.target.checked)}
          className="form-check-input"
        />
        Show done
      </label>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={e => handleChangeSearch(e.target.value)}
        className="form-control"
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  done: PropTypes.bool,
  editMode: PropTypes.bool,
  handleChangeSearch: PropTypes.func.isRequired,
  handleChangeDone: PropTypes.func.isRequired
}

export default SearchBar;

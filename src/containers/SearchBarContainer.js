import { connect } from 'react-redux'
import { setSearchFilter, setDoneFilter } from '../actions/filters'
import SearchBar from '../components/SearchBar'

const mapStateToProps = (state) => ({
  searchText: state.filter.search,
  done: state.filter.done,
  editMode: state.editMode.isActive,
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeSearch: (text) => {
    dispatch(setSearchFilter(text));
  },
  handleChangeDone: (done) => {
    dispatch(setDoneFilter(done));
  }
})

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;

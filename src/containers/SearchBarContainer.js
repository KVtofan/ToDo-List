import { connect } from 'react-redux'
import { setSearchFilter, setDoneFilter } from '../actions'
import SearchBar from '../components/SearchBar'

const mapStateToProps = (state) => ({
  searchText: state.filter.search,
  done: state.filter.done
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

export const filter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      return {
        ...state,
        search: action.search,
      }
    case 'SET_DONE_FILTER':
      return {
        ...state,
        done: !state.done,
      }
      case 'SET_CATEGORY_FILTER':
        return state;
    default:
      return state;
  }
}

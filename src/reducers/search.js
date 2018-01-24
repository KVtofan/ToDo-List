export const search = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return action.text;
    default:
      return state;
  }
}

export const done = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_DONE':
      return action.done;
    default:
      return state;
  }
}

{}

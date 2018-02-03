  import { combineReducers } from 'redux';
import { filter } from './filter';
import { editMode } from './editMode';
import {categories } from './categories';

const rootReducer = combineReducers({
  filter,
  editMode,
  categories
})

export default rootReducer

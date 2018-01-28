import {
  ADD_CATEGORY, REMOVE_CATEGORY, RENAME_CATEGORY, ADD_SUBCATEGORY, SET_CATEGORY_FILTER
} from '../constants';

let nextCategoryId = 5;

export const addCategory = (categoryName) => ({
  type: ADD_CATEGORY,
  id: nextCategoryId++,
  categoryName
})

export const removeCategory = (itemIndex) => ({
  type: REMOVE_CATEGORY,
  itemIndex
})

export const renameCategory = (item, newCategoryName) => ({
  type: RENAME_CATEGORY,
  item,
  newCategoryName
})

export const addSubcategory = (categoryId, subCategoryName) => ({
  type: ADD_SUBCATEGORY,
  categoryId,
  subCategoryName,
  subCategoryId: nextCategoryId++,
})

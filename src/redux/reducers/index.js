import { combineReducers } from 'redux'

import categoryList from './categoryList'
import tagList from './tagList'

export default combineReducers({
  categoryList,
  tagList
})

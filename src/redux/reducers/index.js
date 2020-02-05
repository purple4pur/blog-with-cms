import { combineReducers } from 'redux'

import postList from './postList'
import tagList from './tagList'

export default combineReducers({
  postList,
  tagList
})

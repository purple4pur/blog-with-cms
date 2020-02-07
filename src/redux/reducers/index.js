import { combineReducers } from 'redux'

import postList from './postList'
import tagList from './tagList'
import adminStatus from './adminStatus'

export default combineReducers({
  postList,
  tagList,
  adminStatus
})

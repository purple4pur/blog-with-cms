import { combineReducers } from 'redux'

import post from './post'
import postList from './postList'
import tagList from './tagList'
import adminStatus from './adminStatus'
import errorMsg from './errorMsg'
import addPost from './addPost'

export default combineReducers({
  post,
  postList,
  tagList,
  adminStatus,
  errorMsg,
  addPost
})

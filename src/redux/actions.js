import actionTypes from './actionTypes'

import { getCategoryList, getTagList, getTagPost, getAuthorPost, verifyStatus, updatePost } from 'services'

const startFetchList = () => ({
  type: actionTypes.START_FETCH_LIST
})

const fetchListSuccess = data => ({
  type: actionTypes.FETCH_LIST_SUCCESS,
  payload: { data }
})

const fetchListFailed = () => ({
  type: actionTypes.FETCH_LIST_FAILED
})

export const fetchList = (categoryID, tagID, authorID) => dispatch => {
  dispatch(startFetchList())
  if (categoryID) {
    getCategoryList(categoryID)
      .then(resp => {
        if (resp.data.errCode) {
          console.log(resp.data.errMsg)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(resp.data.errCode))
        } else if (resp.data[0].id) {
          dispatch(fetchListSuccess(resp.data))
        } else {
          console.log('Error: ' + resp.data)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(99))
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchListFailed())
        dispatch(setErrorMsg(7))
      })

  } else if (tagID) {
    getTagPost(tagID)
      .then(resp => {
        if (resp.data.errCode) {
          console.log(resp.data.errMsg)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(resp.data.errCode))
        } else if (resp.data[0].id) {
          dispatch(fetchListSuccess(resp.data))
        } else {
          console.log('Error: ' + resp.data)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(99))
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchListFailed())
        dispatch(setErrorMsg(7))
      })

  } else {
    getAuthorPost(authorID)
      .then(resp => {
        if (resp.data.errCode) {
          console.log(resp.data.errMsg)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(resp.data.errCode))
        } else if (resp.data[0].id) {
          dispatch(fetchListSuccess(resp.data))
        } else {
          console.log('Error: ' + resp.data)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(99))
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchListFailed())
        dispatch(setErrorMsg(7))
      })
  }
}

const startFetchTags = () => ({
  type: actionTypes.START_FETCH_TAGS
})

const fetchTagsSuccess = data => ({
  type: actionTypes.FETCH_TAGS_SUCCESS,
  payload: { data }
})

const fetchTagsFailed = () => ({
  type: actionTypes.FETCH_TAGS_FAILED
})

export const fetchTags = () => dispatch => {
  dispatch(startFetchTags())
  getTagList()
    .then(resp => {
      if (resp.data[0].id) {
        dispatch(fetchTagsSuccess(resp.data))
      } else {
        console.log('Error: ' + resp.data)
        dispatch(fetchTagsFailed())
        dispatch(setErrorMsg(99))
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchTagsFailed())
      dispatch(setErrorMsg(7))
    })
}

const startVerifyToken = () => ({
  type: actionTypes.START_VERIFY_TOKEN
})

const verifyTokenSuccess = (user, id) => ({
  type: actionTypes.VERIFY_TOKEN_SUCCESS,
  payload: { user, id }
})

const verifyTokenFailed = () => ({
  type: actionTypes.VERIFY_TOKEN_FAILED
})

export const verifyToken = () => dispatch => {
  dispatch(startVerifyToken())
  if (localStorage.getItem('purple4pur/blog:JWT')) {
    verifyStatus(undefined, undefined, localStorage.getItem('purple4pur/blog:JWT'))
      .then(resp => {
        if (resp.data.activeUser) {
          dispatch(verifyTokenSuccess(resp.data.activeUser, resp.data.activeUserID))
        } else {
          dispatch(verifyTokenFailed())
          dispatch(removeToken())
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(verifyTokenFailed())
        dispatch(setErrorMsg(7))
      })
  } else {
    dispatch(verifyTokenFailed())
  }
}

const startVerifyLogin = () => ({
  type: actionTypes.START_VERIFY_LOGIN
})

const verifyLoginSuccess = () => ({
  type: actionTypes.VERIFY_LOGIN_SUCCESS
})

const verifyLoginFailed = () => ({
  type: actionTypes.VERIFY_LOGIN_FAILED
})

export const verifyLogin = (user, pwd) => dispatch => {
  dispatch(startVerifyLogin())
  verifyStatus(user, pwd, undefined)
    .then(resp => {
      if (resp.data === '') {
        localStorage.setItem('purple4pur/blog:JWT', resp.headers.authorization)
        dispatch(verifyLoginSuccess())
        dispatch(verifyToken())
      } else {
        console.log(resp.data.errMsg)
        dispatch(verifyLoginFailed())
        dispatch(setErrorMsg(resp.data.errCode))
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(verifyLoginFailed())
      dispatch(setErrorMsg(7))
    })
}

const startRemoveToken = () => ({
  type: actionTypes.START_REMOVE_TOKEN
})

const removeTokenSuccess = () => ({
  type: actionTypes.REMOVE_TOKEN_SUCCESS
})

export const removeToken = () => dispatch => {
  dispatch(startRemoveToken())
  localStorage.removeItem('purple4pur/blog:JWT')
  dispatch(removeTokenSuccess())
  dispatch(verifyToken())
}

const setErrorMsg = code => ({
  type: actionTypes.SET_ERROR_MSG,
  payload: { code }
})

export const resetErrorMsg = () => ({
  type: actionTypes.RESET_ERROR_MSG
})

const startAddPost = () => ({
  type: actionTypes.START_ADD_POST
})

const addPostSuccess = () => ({
  type: actionTypes.ADD_POST_SUCCESS
})

const addPostFaild = () => ({
  type: actionTypes.ADD_POST_FAILED
})

export const addPost = (title, content) => dispatch => {
  dispatch(startAddPost())
  updatePost(localStorage.getItem('purple4pur/blog:JWT'), title, content)
    .then(resp => {
      console.log(resp.data)
    })
  dispatch(addPostSuccess())
}

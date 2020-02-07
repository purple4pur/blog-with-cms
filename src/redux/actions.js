import actionTypes from './actionTypes'

import { getCategoryList, getTagList, getTagPost, verifyStatus } from 'services'

const startFetchList = () => ({
  type: actionTypes.START_FETCH_LIST
})

const fetchListSuccess = data => ({
  type: actionTypes.FETCH_LIST_SUCCESS,
  payload: { data }
})

const fetchListfailed = () => ({
  type: actionTypes.FETCH_LIST_FAILED
})

export const fetchList = (categoryID, tagID) => dispatch => {
  dispatch(startFetchList())
  if (categoryID) {
    getCategoryList(categoryID)
      .then(resp => {
        if (resp.status === 200) {
          dispatch(fetchListSuccess(resp.data))
        } else {
          console.log('fetch list error: status = ' + resp.status)
          dispatch(fetchListfailed())
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchListfailed())
      })

  } else {
    getTagPost(tagID)
      .then(resp => {
        if (resp.status === 200) {
          dispatch(fetchListSuccess(resp.data))
        } else {
          console.log('fetch list error: status = ' + resp.status)
          dispatch(fetchListfailed())
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchListfailed())
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

const fetchTagsfailed = () => ({
  type: actionTypes.FETCH_TAGS_FAILED
})

export const fetchTags = () => dispatch => {
  dispatch(startFetchTags())
  getTagList()
    .then(resp => {
      if (resp.status === 200) {
        dispatch(fetchTagsSuccess(resp.data))
      } else {
        console.log('fetch list error: status = ' + resp.status)
        dispatch(fetchTagsfailed())
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchTagsfailed())
    })
}

const startVerifyToken = () => ({
  type: actionTypes.START_VERIFY_TOKEN
})

const verifyTokenSuccess = user => ({
  type: actionTypes.VERIFY_TOKEN_SUCCESS,
  payload: { user }
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
          dispatch(verifyTokenSuccess(resp.data.activeUser))
        } else {
          console.log(resp.data)
          dispatch(verifyTokenFailed())
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(verifyTokenFailed())
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
  console.log('into verifyLogin')
  dispatch(startVerifyLogin())
  verifyStatus(user, pwd, undefined)
    .then(resp => {
      if (resp.data === 'Verified.') {
        localStorage.setItem('purple4pur/blog:JWT', resp.headers.authorization)
        dispatch(verifyLoginSuccess())
        dispatch(verifyToken())
      } else {
        console.log(resp.data)
        dispatch(verifyLoginFailed())
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(verifyLoginFailed())
    })
}

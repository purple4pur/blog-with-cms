import actionTypes from './actionTypes'

import { getCategoryList, getTagList } from 'services'

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

export const fetchList = categoryID => dispatch => {
  dispatch(startFetchList())
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

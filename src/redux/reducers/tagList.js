import actionTypes from '../actionTypes'

const initState = {
  isLoading: false,
  fetchError: false,
  tags: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH_TAGS:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.FETCH_TAGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchError: false,
        tags: action.payload.data
      }
    case actionTypes.FETCH_TAGS_FAILED:
      return {
        ...state,
        isLoading: false,
        fetchError: true
      }
    default:
      return state
  }
}

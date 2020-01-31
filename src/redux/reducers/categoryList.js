import actionTypes from '../actionTypes'

const initState = {
  isLoading: false,
  fetchError: false,
  list: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH_LIST:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.FETCH_LIST_SUCCESS:
      return {
        isLoading: false,
        fetchError: false,
        list: action.payload.data
      }
    case actionTypes.FETCH_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        fetchError: true
      }
    default:
      return state
  }
}

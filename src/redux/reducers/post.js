import actionTypes from '../actionTypes'

const initState = {
  isLoading: false,
  data: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH_POST:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }
    case actionTypes.FETCH_POST_FAILED:
      return initState
    default:
      return state
  }
}

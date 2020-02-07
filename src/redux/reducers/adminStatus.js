import actionTypes from '../actionTypes'

const initState = {
  isLoading: false,
  isLoggedIn: false,
  activeUser: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_VERIFY_TOKEN:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        activeUser: action.payload.user
      }
    case actionTypes.VERIFY_TOKEN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        activeUser: ''
      }
    case actionTypes.START_VERIFY_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.VERIFY_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case actionTypes.VERIFY_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

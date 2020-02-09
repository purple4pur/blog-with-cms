import actionTypes from '../actionTypes'

const initState = {
  isLoading: false,
  isLoggedIn: false,
  activeUser: '',
  activeUserID: undefined
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
        activeUser: action.payload.user,
        activeUserID: action.payload.id
      }
    case actionTypes.VERIFY_TOKEN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        activeUser: '',
        activeUserID: undefined
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
    case actionTypes.START_REMOVE_TOKEN:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.REMOVE_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activeUser: '',
        activeUserID: undefined
      }
    default:
      return state
  }
}

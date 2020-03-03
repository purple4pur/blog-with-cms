import actionTypes from '../actionTypes'

const initState = {
  links: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LINKS:
      return {
        ...state,
        links: action.payload.data
      }
    default:
      return state
  }
}

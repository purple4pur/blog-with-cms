import actionTypes from '../actionTypes'

const initState = {
  isLoading: false,
  msg: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_ADD:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        msg: '发布成功'
      }
    case actionTypes.ADD_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        msg: '发布失败'
      }
    case actionTypes.ADD_DRAFT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        msg: '保存成功'
      }
    case actionTypes.ADD_DRAFT_FAILED:
      return {
        ...state,
        isLoading: false,
        msg: '保存失败'
      }
    case actionTypes.RESET_ADD_MSG:
      return initState
    default:
      return state
  }
}

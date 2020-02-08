import actionTypes from '../actionTypes'

const initState = {
  isError: true,
  errCode: 1,
  errMsg: '[example]数据库连接失败'
}

const msg = {
  0: '',
  1: '数据库连接失败',
  2: '用户名为空',
  3: '密码为空',
  4: '用户名不存在',
  5: '密码错误',
  6: '登陆已失效，请重新登陆',
  99: '未知错误'
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR_MSG:
      return {
        ...state,
        isError: true,
        // errCode: action.payload.errCode,
        // errMsg: msg[action.payload.errCode]
      }
    case actionTypes.RESET_ERROR_MSG:
      return {
        ...state,
        isError: false
      }
    default:
      return state
  }
}

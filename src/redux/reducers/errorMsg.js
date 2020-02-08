import actionTypes from '../actionTypes'

const initState = {
  isError: false,
  errCode: 0,
  errMsg: ''
}

const msg = {
  0: '',
  1: '数据库连接失败',
  2: '用户名为空',
  3: '密码为空',
  4: '用户名不存在',
  5: '密码错误',
  6: '无效 JWT',
  7: '网络错误',
  8: '查询结果为空',
  99: '未知错误'
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR_MSG:
      return {
        ...state,
        isError: true,
        errCode: action.payload.code,
        errMsg: msg[action.payload.code]
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

import actionTypes from '../actionTypes'

const initState = {
  isLoading: false,
  fetchError: false,
  list: [{
    "id": "4",
    "name": "ae"
  },
  {
    "id": "1",
    "name": "blog"
  }]
}

export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

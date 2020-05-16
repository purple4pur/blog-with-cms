import actionTypes from '../actionTypes';

const initState = {
  isLoading: false,
  fetchError: false,
  comments: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH_COMMENTS:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchError: false,
        comments: action.payload.data
      };
    case actionTypes.FETCH_COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        fetchError: true
      };
    default:
      return state;
  }
};

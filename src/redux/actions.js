import actionTypes from './actionTypes';

import {
  getPost,
  getCategoryList,
  getTagList,
  getTagPost,
  getAuthorPost,
  verifyStatus,
  updatePost,
  getPvtDftList,
  getOriPost,
  getLink,
  getComment
} from 'services';

const startFetchPost = () => ({
  type: actionTypes.START_FETCH_POST
});

const fetchPostSuccess = data => ({
  type: actionTypes.FETCH_POST_SUCCESS,
  payload: { data }
});

const fetchPostFailed = () => ({
  type: actionTypes.FETCH_POST_FAILED
});

// 获取文章详情
export const fetchPost = (postID, type) => dispatch => {
  dispatch(startFetchPost());
  let request = getPost(postID);
  if (type === 'edit') {
    request = getOriPost(localStorage.getItem('purple4pur/blog:JWT'), postID);
  }
  request
    .then(resp => {
      if (resp.data.errCode) {
        console.log(resp.data.errMsg);
        dispatch(fetchPostFailed());
        dispatch(setErrorMsg(resp.data.errCode));
      } else if (resp.data.id) {
        dispatch(fetchPostSuccess(resp.data));
      } else {
        console.log('Error: ' + resp.data);
        dispatch(fetchPostFailed());
        dispatch(setErrorMsg(99));
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchListFailed());
      dispatch(setErrorMsg(7));
    });
};

const startFetchList = () => ({
  type: actionTypes.START_FETCH_LIST
});

const fetchListSuccess = data => ({
  type: actionTypes.FETCH_LIST_SUCCESS,
  payload: { data }
});

const fetchListFailed = () => ({
  type: actionTypes.FETCH_LIST_FAILED
});

// 获取文章列表（按栏目 / 标签 / 作者）
export const fetchList = (categoryID, tagID, authorID, type) => dispatch => {
  dispatch(startFetchList());
  if (!type) {
    let request;
    if (categoryID) {
      request = getCategoryList(categoryID);
    } else if (tagID) {
      request = getTagPost(tagID);
    } else if (authorID) {
      request = getAuthorPost(authorID);
    }
    request
      .then(resp => {
        if (resp.data.errCode) {
          console.log(resp.data.errMsg);
          dispatch(fetchListFailed());
          dispatch(setErrorMsg(resp.data.errCode));
        } else if (resp.data[0].id) {
          dispatch(fetchListSuccess(resp.data));
        } else {
          console.log('Error: ' + resp.data);
          dispatch(fetchListFailed());
          dispatch(setErrorMsg(99));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchListFailed());
        dispatch(setErrorMsg(7));
      });

  } else {
    if (localStorage.getItem('purple4pur/blog:JWT')) {
      getPvtDftList(localStorage.getItem('purple4pur/blog:JWT'), type)
        .then(resp => {
          if (resp.data.errCode) {
            console.log(resp.data.errMsg);
            dispatch(fetchListFailed());
            dispatch(setErrorMsg(resp.data.errCode));
          } else if (resp.data[0].id) {
            dispatch(fetchListSuccess(resp.data));
          } else {
            console.log('Error: ' + resp.data);
            dispatch(fetchListFailed());
            dispatch(setErrorMsg(99));
          }
        })
        .catch(err => {
          console.log(err);
          dispatch(fetchListFailed());
          dispatch(setErrorMsg(7));
        });
    } else {
      dispatch(fetchListFailed());
      dispatch(verifyToken());
    }
  }
};

const startFetchTags = () => ({
  type: actionTypes.START_FETCH_TAGS
});

const fetchTagsSuccess = data => ({
  type: actionTypes.FETCH_TAGS_SUCCESS,
  payload: { data }
});

const fetchTagsFailed = () => ({
  type: actionTypes.FETCH_TAGS_FAILED
});

// 获取标签列表
export const fetchTags = type => dispatch => {
  dispatch(startFetchTags());
  getTagList(type)
    .then(resp => {
      if (resp.data[0].id) {
        dispatch(fetchTagsSuccess(resp.data));
      } else {
        console.log('Error: ' + resp.data);
        dispatch(fetchTagsFailed());
        dispatch(setErrorMsg(99));
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchTagsFailed());
      dispatch(setErrorMsg(7));
    });
};

const startVerifyToken = () => ({
  type: actionTypes.START_VERIFY_TOKEN
});

const verifyTokenSuccess = (user, id) => ({
  type: actionTypes.VERIFY_TOKEN_SUCCESS,
  payload: { user, id }
});

const verifyTokenFailed = () => ({
  type: actionTypes.VERIFY_TOKEN_FAILED
});

// 验证登陆状态
export const verifyToken = () => dispatch => {
  dispatch(startVerifyToken());
  if (localStorage.getItem('purple4pur/blog:JWT')) {
    verifyStatus(undefined, undefined, localStorage.getItem('purple4pur/blog:JWT'))
      .then(resp => {
        if (resp.data.activeUser) {
          dispatch(verifyTokenSuccess(resp.data.activeUser, resp.data.activeUserID));
        } else {
          dispatch(verifyTokenFailed());
          dispatch(removeToken());
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(verifyTokenFailed());
        dispatch(setErrorMsg(7));
      });
  } else {
    dispatch(verifyTokenFailed());
  }
};

const startVerifyLogin = () => ({
  type: actionTypes.START_VERIFY_LOGIN
});

const verifyLoginSuccess = () => ({
  type: actionTypes.VERIFY_LOGIN_SUCCESS
});

const verifyLoginFailed = () => ({
  type: actionTypes.VERIFY_LOGIN_FAILED
});

// 验证登陆
export const verifyLogin = (user, pwd) => dispatch => {
  dispatch(startVerifyLogin());
  verifyStatus(user, pwd, undefined)
    .then(resp => {
      if (resp.data === '') {
        localStorage.setItem('purple4pur/blog:JWT', resp.headers.authorization);
        dispatch(verifyLoginSuccess());
        dispatch(verifyToken());
      } else if (resp.data.errCode) {
        console.log(resp.data.errMsg);
        dispatch(verifyLoginFailed());
        dispatch(setErrorMsg(resp.data.errCode));
      } else {
        console.log('Error: ' + resp.data);
        dispatch(verifyLoginFailed());
        dispatch(setErrorMsg(99));
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(verifyLoginFailed());
      dispatch(setErrorMsg(7));
    });
};

const startRemoveToken = () => ({
  type: actionTypes.START_REMOVE_TOKEN
});

const removeTokenSuccess = () => ({
  type: actionTypes.REMOVE_TOKEN_SUCCESS
});

// 退出登录
export const removeToken = () => dispatch => {
  dispatch(startRemoveToken());
  localStorage.removeItem('purple4pur/blog:JWT');
  dispatch(removeTokenSuccess());
  dispatch(verifyToken());
};

const setErrorMsg = code => ({
  type: actionTypes.SET_ERROR_MSG,
  payload: { code }
});

// 关闭错误提示
export const resetErrorMsg = () => ({
  type: actionTypes.RESET_ERROR_MSG
});

const startAdd = () => ({
  type: actionTypes.START_ADD
});

const addPostSuccess = () => ({
  type: actionTypes.ADD_POST_SUCCESS
});

const addPostFailed = () => ({
  type: actionTypes.ADD_POST_FAILED
});

const addDraftSuccess = () => ({
  type: actionTypes.ADD_DRAFT_SUCCESS
});

const addDraftFailed = () => ({
  type: actionTypes.ADD_DRAFT_FAILED
});

const resetAddMsg = () => ({
  type: actionTypes.RESET_ADD_MSG
});

// 添加文章
export const addPost = (type, title, content, categoryID, tags) => dispatch => {
  dispatch(startAdd());
  let success = addPostSuccess();
  let failed = addPostFailed();
  if (type === 'draft') {
    success = addDraftSuccess();
    failed = addDraftFailed();
  }
  updatePost(localStorage.getItem('purple4pur/blog:JWT'), type, title, content, categoryID, tags)
    .then(resp => {
      if (resp.data.status) {
        dispatch(success);
      } else if (resp.data.errCode) {
        console.log(resp.data.errMsg);
        dispatch(failed);
        dispatch(setErrorMsg(resp.data.errCode));
      } else {
        console.log('Error: ' + resp.data);
        dispatch(failed);
        dispatch(setErrorMsg(99));
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(failed);
      dispatch(setErrorMsg(7));
    })
    .finally(() => {
      setTimeout(() => { dispatch(resetAddMsg()); }, 3000);
    });
};

const fetchLinks = data => ({
  type: actionTypes.FETCH_LINKS,
  payload: { data }
});

// 获取友链
export const getLinks = () => dispatch => {
  getLink()
    .then(resp => {
      if (resp.data[0].title) {
        dispatch(fetchLinks(resp.data));
      } else if (resp.data.errCode) {
        console.log(resp.data.errMsg);
        dispatch(setErrorMsg(resp.data.errCode));
      } else {
        console.log('Error: ' + resp.data);
        dispatch(setErrorMsg(99));
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(setErrorMsg(7));
    });
};

const startFetchComment = () => ({
  type: actionTypes.START_FETCH_COMMENTS
});

const fetchCommentSuccess = data => ({
  type: actionTypes.FETCH_COMMENTS_SUCCESS,
  payload: { data }
});

const fetchCommentFailed = () => ({
  type: actionTypes.FETCH_COMMENTS_FAILED
});

// 获取评论
export const fetchComment = id => dispatch => {
  dispatch(startFetchComment());
  getComment(id)
    .then(resp => {
      if (resp.data.no_comment) {
        dispatch(fetchCommentSuccess([]));
      } else if (resp.data[0].name) {
        dispatch(fetchCommentSuccess(resp.data));
      } else if (resp.data.errCode) {
        console.log(resp.data.errMsg);
        dispatch(fetchCommentFailed());
        dispatch(setErrorMsg(resp.data.errCode));
      } else {
        console.log('Error: ' + resp.data);
        dispatch(fetchCommentFailed());
        dispatch(setErrorMsg(99));
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchCommentFailed());
      dispatch(setErrorMsg(7));
    });
};

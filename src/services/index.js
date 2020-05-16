import axios from 'axios'

const ajax = axios.create({
  // baseURL: 'https://purple4pur.com/api'
  baseURL: 'http://localhost/php' // debug
})

ajax.defaults.headers.post['Content-type'] = 'application/json; charset=utf-8'

// 获取文章详情
export const getPost = id => (
  ajax.get('/post.php', {
    params: { postID: id }
  })
)

// 获取三个栏目各自的文章列表
export const getCategoryList = id => (
  ajax.get('/categories.php', {
    params: { categoryID: id }
  })
)

// 获取标签列表
export const getTagList = typ => (
  ajax.get('/tags.php', {
    params: { type: typ }
  })
)

// 获取某标签下的文章列表
export const getTagPost = id => (
  ajax.get('/tags.php', {
    params: { tagID: id }
  })
)

// 获取某作者下的文章列表
export const getAuthorPost = id => (
  ajax.get('/authors.php', {
    params: { authorID: id }
  })
)

// 检查登陆 / 登陆状态
export const verifyStatus = (user, pwd, token) => (
  ajax.post('/login.php', {
    username: user,
    password: pwd,
    decoratedToken: token
  })
)

// 更新文章
export const updatePost = (token, typ, ttl, cntt, cateID, tgs) => (
  ajax.post('/update_post.php', {
    decoratedToken: token,
    type: typ,
    title: ttl,
    content: cntt,
    categoryID: cateID,
    tags: tgs
  })
)

// 获取某作者下的不可见文章列表（隐藏 / 草稿）
export const getPvtDftList = (token, typ) => (
  ajax.post('/pvt_dft.php', {
    decoratedToken: token,
    type: typ
  })
)

// 获取文章详情（用于编辑界面）
export const getOriPost = (token, pid) => (
  ajax.post('/edit_post.php', {
    decoratedToken: token,
    postID: pid
  })
)

// 获取友链详情
export const getLink = () => (
  ajax.get('/links.php')
)

// 获取文章评论
export const getComment = id => (
  ajax.get('/comment.php', {
    params: { postID: id }
  })
)

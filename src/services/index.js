import axios from 'axios'

const ajax = axios.create({
  baseURL: 'https://purple4pur.com/apis'
  // baseURL: 'http://localhost/php' // debug
})

ajax.defaults.headers.post['Content-type'] = 'application/json; charset=utf-8'

export const getPost = id => (
  ajax.get('/post.php', {
    params: { postID: id }
  })
)

export const getCategoryList = id => (
  ajax.get('/categories.php', {
    params: { categoryID: id }
  })
)

export const getTagList = () => (
  ajax.get('/tags.php')
)

export const getTagPost = id => (
  ajax.get('/tags.php', {
    params: { tagID: id }
  })
)

export const getAuthorPost = id => (
  ajax.get('/authors.php', {
    params: { authorID: id }
  })
)

export const verifyStatus = (user, pwd, token) => (
  ajax.post('/login.php', {
    username: user,
    password: pwd,
    decoratedToken: token
  })
)

export const updatePost = (token, typ, ttl, cntt, cateID) => (
  ajax.post('/update_post.php', {
    decoratedToken: token,
    type: typ,
    title: ttl,
    content: cntt,
    categoryID: cateID
  })
)

export const getPvtDftList = (token, typ) => (
  ajax.post('/pvt_dft.php', {
    decoratedToken: token,
    type: typ
  })
)

export const getOriPost = (token, pid) => (
  ajax.post('/edit_post.php', {
    decoratedToken: token,
    postID: pid
  })
)

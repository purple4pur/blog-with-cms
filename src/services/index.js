import axios from 'axios'

const ajax = axios.create({
  // baseURL: 'https://purple4pur.com/apis'
  baseURL: 'http://localhost/php' // debug
})

export const getCategoryList = id => (
  ajax.get('/categories.php', {
    params: {
      categoryID: id
    }
  })
)

export const getTagList = () => (
  ajax.get('/tags.php')
)

export const getTagPost = id => (
  ajax.get('/tags.php', {
    params: {
      tagID: id
    }
  })
)

export const verifyLogin = (user, pwd, token) => (
  ajax.post('/login.php', {
    username: user,
    password: pwd,
    decoratedToken: token
  })
)

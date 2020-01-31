import axios from 'axios'

const ajax = axios.create({
  baseURL: 'http://localhost/php'
})

export const getCategoryList = id => (
  ajax.get('/categories.php', {
    params: {
      categoryID: id
    }
  })
)

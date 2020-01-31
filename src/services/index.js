import axios from 'axios'

const ajax = axios.create({
  baseURL: 'https://purple4pur.com/php'
})

export const getCategoryList = id => (
  ajax.get('/categories.php', {
    params: {
      categoryID: id
    }
  })
)

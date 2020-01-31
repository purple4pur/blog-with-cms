import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Blog from './Blog'
import store from './redux/store'

render(
  <Provider store={store}>
    <Router forceRefresh>
      <Blog />
    </Router>
  </Provider>,
  document.querySelector("#root")
)

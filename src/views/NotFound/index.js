import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default class NotFound extends PureComponent {
  componentDidMount() {
    document.title = "404 | Purple4pur's Blog"
  }

  render() {
    return (
      <div className="notfound-box">
        <div className="notfound-txt">
          <h1>404</h1>
          <p>莫欺我没有写这一页</p>
          <p>还不速速<Link to="/">返回首页</Link></p>
        </div>
      </div>
    )
  }
}

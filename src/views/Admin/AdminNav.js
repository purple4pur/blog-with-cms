import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class AdminNav extends PureComponent {
  render() {
    return (
      <ul>
        <li><Link to="/admin/manage">文章管理</Link></li>
        <li><Link to="/admin/newpost">文章发布</Link></li>
        <li><Link to="/admin/draft">草稿箱</Link></li>
        <li><Link to="/admin/stats">技术统计</Link></li>
      </ul>
    )
  }
}

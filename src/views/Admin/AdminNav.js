import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class AdminNav extends PureComponent {
  render() {
    return (
      <ul>
        <li>
          {this.props.view === 'manage' ? '*' : ''}
          <Link to="/admin/manage">文章管理</Link>
        </li>
        <li>
          {this.props.view === 'newpost' ? '*' : ''}
          <Link to="/admin/newpost">文章发布</Link>
        </li>
        <li>
          {this.props.view === 'draft' ? '*' : ''}
          <Link to="/admin/draft">草稿箱</Link>
        </li>
        <li>
          {this.props.view === 'private' ? '*' : ''}
          <Link to="/admin/private">非公开文章</Link>
        </li>
      </ul>
    )
  }
}

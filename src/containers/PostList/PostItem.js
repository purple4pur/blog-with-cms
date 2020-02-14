import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class PostItem extends PureComponent {
  render() {
    if (this.props.isPublic) {
      return (
        <li>
          <h3><Link to={'/post/' + this.props.id}>{this.props.title}</Link></h3>
          <span><i>{this.props.time.split(' ')[0]}</i></span>
          <span><i>{this.props.author}</i></span>
        </li>
      )
    } else {
      return (
        <li>
          <h3><Link to={'/admin/newpost/' + this.props.id}>{this.props.title}</Link></h3>
        </li>
      )
    }
  }
}

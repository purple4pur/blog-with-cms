import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class PostItem extends PureComponent {
  render() {
    return (
      <li>
        <h3><Link to={'/post/' + this.props.id}>{this.props.title}</Link></h3>
      </li>
    )
  }
}

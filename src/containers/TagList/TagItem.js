import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class TagItem extends PureComponent {
  render() {
    return (
      <li>
        <span><Link to={'/tags/' + this.props.id}>{this.props.name}</Link></span>
      </li>
    )
  }
}

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class TagItem extends PureComponent {
  render() {
    return (
      <li>
        <Link to={'/tags/' + this.props.id}><span>{this.props.name}</span></Link>
      </li>
    )
  }
}

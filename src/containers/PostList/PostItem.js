import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class PostItem extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <li>
        <Link to={'/post/' + this.props.id}><h3>{this.props.title}</h3></Link>
      </li>
    )
  }
}

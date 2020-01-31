import React, { PureComponent } from 'react'

export default class PostItem extends PureComponent {
  render() {
    return (
      <li>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </li>
    )
  }
}

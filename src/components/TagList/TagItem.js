import React, { PureComponent } from 'react'

export default class TagItem extends PureComponent {
  render() {
    return (
      <li>
        <span>{this.props.name}</span>
      </li>
    )
  }
}

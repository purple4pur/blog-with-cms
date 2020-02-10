import React, { PureComponent } from 'react'

import { PostContent } from 'containers'

export default class PostItem extends PureComponent {
  render() {
    return (
      <li>
        <h3>{this.props.title}</h3>
        <PostContent content={this.props.content} />
      </li>
    )
  }
}

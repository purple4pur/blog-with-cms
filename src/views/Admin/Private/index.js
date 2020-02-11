import React, { PureComponent } from 'react'

import { PostList } from 'containers'

export default class Private extends PureComponent {
  render() {
    return (
      <>
        <PostList type="private" />
      </>
    )
  }
}

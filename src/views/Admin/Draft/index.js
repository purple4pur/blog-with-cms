import React, { PureComponent } from 'react'

import { PostList } from 'containers'

export default class Draft extends PureComponent {
  render() {
    return (
      <>
        <PostList type="draft" />
      </>
    )
  }
}

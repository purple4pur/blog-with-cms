import React, { PureComponent } from 'react'

import { PostList } from 'components'

export default class Coding extends PureComponent {
  componentDidMount() {
    document.title = "代码 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <PostList categoryID={1} />
      </>
    )
  }
}

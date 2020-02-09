import React, { PureComponent } from 'react'

import { PostList } from 'components'

export default class Coding extends PureComponent {
  componentDidMount() {
    document.title = "代码 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <h1>这里是代码。Coming soon.</h1>
        <PostList categoryID={1} />
      </>
    )
  }
}

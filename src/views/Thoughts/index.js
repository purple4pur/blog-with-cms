import React, { PureComponent } from 'react'

import { PostList } from 'components'

export default class Thoughts extends PureComponent {
  componentDidMount() {
    document.title = "杂谈 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <PostList categoryID={3} />
      </>
    )
  }
}

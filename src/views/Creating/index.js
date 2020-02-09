import React, { PureComponent } from 'react'

import { PostList } from 'components'

export default class Creating extends PureComponent {
  componentDidMount() {
    document.title = "创作 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <PostList categoryID={2} />
      </>
    )
  }
}

import React, { PureComponent as Component } from 'react'

import { PostList } from 'components'

export default class Thoughts extends Component {
  render() {
    return (
      <>
        <h1>这里是杂谈。Coming soon.</h1>
        <PostList categoryID={3} />
      </>
    )
  }
}

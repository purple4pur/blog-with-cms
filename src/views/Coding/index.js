import React, { PureComponent as Component } from 'react'

import { PostList } from 'components'

export default class Coding extends Component {
  render() {
    return (
      <>
        <h1>这里是代码。Coming soon.</h1>
        <PostList categoryID={1} />
      </>
    )
  }
}

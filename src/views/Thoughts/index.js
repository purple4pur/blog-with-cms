import React, { PureComponent as Component } from 'react'

import { PostList } from 'components'

export default class Thoughts extends Component {
  componentDidMount() {
    document.title = "杂谈 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <h1>这里是杂谈。Coming soon.</h1>
        <PostList categoryID={3} />
      </>
    )
  }
}

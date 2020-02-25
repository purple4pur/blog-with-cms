import React, { PureComponent } from 'react'

import { PostList } from 'containers'
import './index.css'

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <h1 className="title"><code id="a">const</code> <code id="b">PURPLE4PUR</code></h1>
        <pre className="comment"></pre>
        <PostList categoryID={-1} />
      </>
    )
  }
}

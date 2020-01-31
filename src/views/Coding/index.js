import React, { PureComponent as Component } from 'react'

import {
  Header,
  Footer,
  PostList
} from 'components'

export default class Coding extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>这里是代码。Coming soon.</h1>
        <PostList categoryID={1} />
        <Footer />
      </>
    )
  }
}

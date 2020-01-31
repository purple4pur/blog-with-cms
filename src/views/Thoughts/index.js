import React, { PureComponent as Component } from 'react'

import {
  Header,
  Footer,
  PostList
} from 'components'

export default class Thoughts extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>这里是杂谈。Coming soon.</h1>
        <PostList categoryID={3} />
        <Footer />
      </>
    )
  }
}

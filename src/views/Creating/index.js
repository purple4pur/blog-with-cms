import React, { PureComponent as Component } from 'react'

import {
  Header,
  Footer,
  PostList
} from 'components'

export default class Creating extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>这里是创作。Coming soon.</h1>
        <PostList categoryID={2} />
        <Footer />
      </>
    )
  }
}

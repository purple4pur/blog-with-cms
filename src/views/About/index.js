import React, { PureComponent as Component } from 'react'

import {
  Header,
  Footer
} from 'components'

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>这里是关于。Coming soon.</h1>
        <Footer />
      </>
    )
  }
}

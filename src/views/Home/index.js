import React, { PureComponent as Component } from 'react'

import {
  Header,
  Footer
} from 'components'

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>这里是首页。Coming soon...</h1>
        <Footer />
      </>
    )
  }
}

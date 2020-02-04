import React, { PureComponent } from 'react'

import {
  Header,
  Footer,
  TagList
} from 'components'

export default class Tags extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <TagList />
        <Footer />
      </>
    )
  }
}

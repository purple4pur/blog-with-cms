import React, { PureComponent } from 'react'

import TagItem from './TagItem'

export default class TagList extends PureComponent {
  render() {
    return (
      <ul>
        <TagItem />
        <TagItem />
        <TagItem />
      </ul>
    )
  }
}

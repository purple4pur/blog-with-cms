import React, { PureComponent } from 'react';

export default class Comment extends PureComponent {
  render() {
    console.log(this.props);
    if (!this.props.comments[0]) {
      return <span>无评论</span>;
    } else {
      return (
        <ul>
          {
            this.props.comments.map(item => (
              <li key={item.id}>{item.time} {item.name} {item.content}</li>
            ))
          }
        </ul>
      );
    }
  }
}

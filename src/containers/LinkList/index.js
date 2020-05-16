import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getLinks } from 'redux/actions';

class LinkList extends PureComponent {
  componentDidMount() {
    this.props.getLinks();
  }

  render() {
    return (
      <ul>
        {
          this.props.links.map(item => (
            <li key={item.id}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
          ))
        }
      </ul>
    );
  }
}

const mapToProps = state => ({
  links: state.linkList.links
});

export default connect(
  mapToProps, { getLinks }
)(LinkList);

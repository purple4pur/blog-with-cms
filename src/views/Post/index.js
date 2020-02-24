import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { PostContent } from 'containers'
import { fetchPost } from 'redux/actions'

import './index.css'

class Post extends PureComponent {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id, "readonly")
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>
    } else {
      return (
        <>
          <Helmet>
            <title>{(this.props.data.title ? this.props.data.title + ' - ' : '') + "Purple4pur's Blog"}</title>
          </Helmet>
          <div className="title-info">
            <h1>{this.props.data.title}</h1>
            <span>
              {this.props.data.time}
            </span>
            <span>
              {this.props.data.author}
            </span>
            {
              this.props.data.tags
                ? <ul>
                  {this.props.data.tags.map(tag => (
                    <li key={tag.id}>
                      <Link to={'/tags/' + tag.id}>#{tag.name}</Link>
                    </li>
                  ))}
                </ul>
                : null
            }
          </div>
          <PostContent content={this.props.data.content} />
        </>
      )
    }
  }
}

const mapToProps = state => ({
  isLoading: state.post.isLoading,
  data: state.post.data
})

export default connect(
  mapToProps, { fetchPost }
)(Post)

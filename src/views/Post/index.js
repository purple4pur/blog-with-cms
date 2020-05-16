import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { PostContent, Comment } from 'containers';
import { fetchPost, fetchComment } from 'redux/actions';

import './index.css';

class Post extends PureComponent {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id, "readonly");
    this.props.fetchComment(this.props.match.params.id);
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>;
    } else {
      return (
        <>
          <Helmet>
            <title>{(this.props.data.title ? this.props.data.title + ' - ' : '') + "Purple4pur's Blog"}</title>
          </Helmet>

          {/* 正文 */}
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

          {/* 评论 */}
          {
            this.props.comment_isLoading
              ? <span>评论加载中</span>
              : this.props.comment_fetchError
                ? <span>评论加载出错</span>
                : <Comment comments={this.props.comment_data} />
          }
        </>
      );
    }
  }
}

const mapToProps = state => ({
  isLoading: state.post.isLoading,
  data: state.post.data,
  comment_isLoading: state.comment.isLoading,
  comment_fetchError: state.comment.fetchError,
  comment_data: state.comment.comments
});

export default connect(
  mapToProps, { fetchPost, fetchComment }
)(Post);

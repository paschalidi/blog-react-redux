/*
 *
 * PostsShow
 *
 */

import React, { PropTypes }from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from './actions';

export class PostsShow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDelete() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
          alert('Article has successfully deleted!');
          this.context.router.push('/');
        }
      );
  }

  render() {
    const { post } = this.props;

    if (!post)
      return <div className="text-center.">Loading...</div>
    return (
      <div>
        <button onClick={this.onDelete.bind(this)}
                className="btn btn-danger pull-right">
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h4>Categories: {post.categories}</h4>
        <p>{post.content }</p>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.get('post').post,
  };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

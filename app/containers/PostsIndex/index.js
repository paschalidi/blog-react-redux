/*
 *
 * PostsIndex
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchPosts } from './actions'
import selectPostsIndex from './selectors'
export class PostsIndex extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchPosts();
  }

  // renderPosts(){
  // return this.props.posts.map((post) =>{
  //   console.log(post);
  //   return(
  //     <li className="list-group-item" key={post.id}>
  //       <span className="pull-xs-right">{post.categories}</span>
  //       <strong>{post.title}</strong>
  //     </li>
  //   )
  // })
  // }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          Where is my list?
          {/*{this.renderPosts()}*/}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  //return { posts: state } //****I dont get why the redux state is not being given here.
}

//this gives us action to this.props.fetchPosts
//INSTEAD OF mapDispatchToProps into the connect call you can do { fetchPosts }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

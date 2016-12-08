/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import LoginForm from './LoginForm'
import { createPost } from './actions'

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(data) {
    return this.props.createPost(data)
      .then(() => {
          alert('New article has succesfully adeed!');
          this.context.router.push('/');
        }
      );
  }

  render() {
    return (
      <section>
        <div className="container">
          <Helmet title="Add New Post"
                  meta={[{ name: 'description', content: 'Description of LoginPage' },]} />
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <LoginForm onSubmit={this.onSubmit.bind(this)} locale={this.props.locale} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, { createPost })(LoginPage);

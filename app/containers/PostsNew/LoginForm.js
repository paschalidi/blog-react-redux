import React from 'react'
// Notice that we need redux-form/immutable for the boilerplate
// http://redux-form.com/6.2.0/examples/immutable/
import { Field, reduxForm } from 'redux-form/immutable'
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router'

const renderInputField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <input {...input} className="form-control" type={type} />
    {touched && error && <span>{error}</span>}
  </div>
);

const renderTextareaField = ({ input, meta: { touched, error } }) => (
  <div>
    <textarea {...input} className="form-control" rows="10" cols="40" />
    {touched && error && <span>{error}</span>}
  </div>
);

const LoginForm = (props) => {
  const { error, handleSubmit, submitting, pristine } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label><FormattedMessage {...messages.title} /></label>
        <Field name="title" type="text" component={renderInputField} />
      </div>
      <div className="form-group">
        <label><FormattedMessage {...messages.categories} /></label>
        <Field name="categories" type="text" component={renderInputField} />
      </div>
      <div className="form-group">
        <label><FormattedMessage {...messages.content} /></label>
        <Field name="content" type="text" component={renderTextareaField} />
      </div>

      <div className="btn-toolbar">
        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>
          <FormattedMessage {...messages.submit} />
        </button>
        <Link to="/" className="btn btn-danger"> Cancel </Link>
      </div>
    </form>
  )
};

const validate = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (!values.get('title')) {
    errors.title = 'Required'
  }
  if (!values.get('content')) {
    errors.content = 'Required'
  }
  if (!values.get('categories')) {
    errors.categories = 'Required'
  }
  return errors
};

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)

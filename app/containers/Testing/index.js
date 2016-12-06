/*
 *
 * Testing
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTesting from './selectors';

export class Testing extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = selectTesting();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Testing);

import expect from 'expect';
import testingReducer from '../reducer';
import { fromJS } from 'immutable';

describe('testingReducer', () => {
  it('returns the initial state', () => {
    expect(testingReducer(undefined, {})).toEqual(fromJS({}));
  });
});

import expect from 'expect';
import postsShowReducer from '../reducer';
import { fromJS } from 'immutable';

describe('postsShowReducer', () => {
  it('returns the initial state', () => {
    expect(postsShowReducer(undefined, {})).toEqual(fromJS({}));
  });
});

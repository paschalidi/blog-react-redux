import expect from 'expect';
import postsIndexReducer from '../reducer';
import { fromJS } from 'immutable';

describe('postsIndexReducer', () => {
  it('returns the initial state', () => {
    expect(postsIndexReducer(undefined, {})).toEqual(fromJS({}));
  });
});

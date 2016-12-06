import expect from 'expect';
import postsNewReducer from '../reducer';
import { fromJS } from 'immutable';

describe('postsNewReducer', () => {
  it('returns the initial state', () => {
    expect(postsNewReducer(undefined, {})).toEqual(fromJS({}));
  });
});

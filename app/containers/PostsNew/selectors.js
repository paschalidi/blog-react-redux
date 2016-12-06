import { createSelector } from 'reselect';

/**
 * Direct selector to the postsNew state domain
 */
const selectPostsNewDomain = () => (state) => state.get('postsNew');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PostsNew
 */

const selectPostsNew = () => createSelector(
  selectPostsNewDomain(),
  (substate) => substate.toJS()
);

export default selectPostsNew;
export {
  selectPostsNewDomain,
};

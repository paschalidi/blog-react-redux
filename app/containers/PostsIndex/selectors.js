import { createSelector } from 'reselect';

/**
 * Direct selector to the postsIndex state domain
 */
const selectPostsIndexDomain = () => (state) => state.get('postsIndex');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PostsIndex
 */

const selectPostsIndex = () => createSelector(
  selectPostsIndexDomain()
);

export default selectPostsIndex;
export {
  selectPostsIndexDomain,
};

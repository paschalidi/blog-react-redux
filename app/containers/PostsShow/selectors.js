import { createSelector } from 'reselect';

/**
 * Direct selector to the postsShow state domain
 */
const selectPostsShowDomain = () => (state) => state.get('postsShow');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PostsShow
 */

const selectPostsShow = () => createSelector(
  selectPostsShowDomain(),
  (substate) => substate.toJS()
);

export default selectPostsShow;
export {
  selectPostsShowDomain,
};

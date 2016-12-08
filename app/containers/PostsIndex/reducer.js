/*
 *
 * PostsIndex reducer
 *
 */

import { fromJS } from 'immutable';
import {DEFAULT_ACTION, FETCH_POSTS } from './constants';

const initialState = { all:[], post: null };

function postsIndexReducer(state = { all:[], post: null }, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}

export default postsIndexReducer;
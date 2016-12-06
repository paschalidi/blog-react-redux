/*
 *
 * PostsIndex reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_POSTS
} from './constants';

const initialState = fromJS({ all:[], post: null });

function postsIndexReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log({ ...state, all: action.payload.data })
      console.log(action.type)
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}

export default postsIndexReducer;
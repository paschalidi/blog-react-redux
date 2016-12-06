/*
 *
 * PostsShow reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_POST,
  DELETE_POST
} from './constants';

const initialState = fromJS({});

function postsShowReducer(state = { all: [], post: null }, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}

export default postsShowReducer;

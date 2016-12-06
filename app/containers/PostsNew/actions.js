/*
 *
 * PostsNew actions
 *
 */
import axios from 'axios'
import {
  DEFAULT_ACTION,
  CREATE_POST
} from './constants';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dsklhfksdhfjkdshfkjdshkj';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

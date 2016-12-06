/*
 *
 * PostsIndex actions
 *
 */
import axios from 'axios'
import { FETCH_POSTS } from './constants';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dsklhfksdhfjkdshfkjdshkj';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

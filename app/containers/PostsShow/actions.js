/*
 *
 * PostsShow actions
 *
 */
import axios from 'axios'
import {
  DEFAULT_ACTION,
  FETCH_POST,
  DELETE_POST
}
  from './constants';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dsklhfksdhfjkdshfkjdshkj';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}

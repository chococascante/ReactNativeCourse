import {
  SET_CURRENT_POST,
  SET_ERROR,
  SET_LOADED,
  SET_POSTS,
} from '../actionTypes';
import axios from 'axios';

export const setPostsRedux = (payload) => ({
  type: SET_POSTS,
  payload,
});

export const setLoadedRedux = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const setCurrentPostRedux = (payload) => ({
  type: SET_CURRENT_POST,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const getPosts = () => async (dispatch) => {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPostsRedux(data.data));
    dispatch(setLoadedRedux(true));
  } catch (e) {
    dispatch(setError(e));
    console.warn(e);
  }
};

export function getPostsFun() {
  return function (dispatch, getState) {};
}

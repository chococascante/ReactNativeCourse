import {SET_CURRENT_POST, SET_LOADED, SET_POSTS} from '../actionTypes';

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

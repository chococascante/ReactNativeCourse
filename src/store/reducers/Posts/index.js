import {
  SET_CURRENT_POST,
  SET_ERROR,
  SET_LOADED,
  SET_POSTS,
} from '../../actions/actionTypes';

const initialState = {
  posts: [],
  loaded: false,
  currentPost: null,
  postError: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_POSTS:
      return {...state, posts: payload};

    case SET_LOADED:
      return {...state, loaded: payload};

    case SET_CURRENT_POST:
      return {...state, currentPost: payload};

    case SET_ERROR:
      return {...state, postError: payload};

    default:
      return state;
  }
};

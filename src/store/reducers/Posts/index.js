import {
  SET_CURRENT_POST,
  SET_LOADED,
  SET_POSTS,
} from '../../actions/actionTypes';

const initialState = {
  posts: [],
  loaded: false,
  currentPost: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_POSTS:
      return {...state, posts: payload};

    case SET_LOADED:
      return {...state, loaded: payload};

    case SET_CURRENT_POST:
      return {...state, currentPost: payload};

    default:
      return state;
  }
};

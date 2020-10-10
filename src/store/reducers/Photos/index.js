import {SET_PHOTOS} from '../../actions/actionTypes';

const initialState = {
  photos: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PHOTOS:
      return {...state, ...payload};

    default:
      return state;
  }
};

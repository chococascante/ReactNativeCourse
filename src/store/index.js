import {createStore} from 'redux';
import PostsReducer from './reducers/Posts';

export default function createReduxStore() {
  createStore(PostsReducer);
}

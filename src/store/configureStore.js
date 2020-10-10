import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers, compose} from 'redux';
import * as reducers from './index';

export default function configureStore() {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    compose(applyMiddleware(thunk)),
  );
  return store;
}

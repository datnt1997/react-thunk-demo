import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'; //import thunk

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(thunk)) // create store to use thunk
  return store;
}
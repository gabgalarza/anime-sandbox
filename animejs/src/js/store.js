import { createStore, applyMiddleware } from 'redux';
import productReducer from './reducers/reducer.js';
import thunk from 'redux-thunk';

const store = createStore(
  productReducer,
  applyMiddleware(thunk)
);

export default store;

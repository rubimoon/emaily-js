import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const createAppStore = (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(reduxThunk));

export { createAppStore };

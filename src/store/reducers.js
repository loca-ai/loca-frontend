import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './user';
import monumentsReducer from './monuments';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    user: userReducer,
    monuments: monumentsReducer
  }),
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
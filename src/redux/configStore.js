import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homeReducer from './home/home';

const rootReducer = combineReducers({
  homeData: homeReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

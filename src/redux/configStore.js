import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import detailsReducer from './details/details';
import homeReducer from './home/home';

const rootReducer = combineReducers({
  homeData: homeReducer,
  detailsData: detailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

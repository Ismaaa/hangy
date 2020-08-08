import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import gameReducer, { gameMiddleware } from './ducks/game';

const logMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
});

const rootReducer = combineReducers({
  game: gameReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logMiddleware, gameMiddleware)),
);

export default store;

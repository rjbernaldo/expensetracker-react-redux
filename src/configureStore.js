import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

var middleware;

if (process.env.NODE_ENV === 'development') {
  middleware = applyMiddleware(thunkMiddleware, createLogger());
} else {
  middleware = applyMiddleware(thunkMiddleware);
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, middleware);
}

export default configureStore;

// const createStoreDevTools = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore)
// const store = createStoreDevTools(rootReducer);

// const store = createStore(
//   reducers,
//   // combineReducers({
//   //   reducers,
//   //   routing: routerReducer
//   // }),
//   // applyMiddleware(
//   //   thunkMiddleware,
//   //   loggerMiddleware
//   // )
// )

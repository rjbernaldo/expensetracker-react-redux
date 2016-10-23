import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return store;
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

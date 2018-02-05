import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { routerEnhancer, routerMiddleware } from './_shared';

const store = createStore(
  reducer,
  compose(
    routerEnhancer,
    applyMiddleware(routerMiddleware, thunk),
    window.navigator.userAgent.includes('Chrome') ?
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
  ),
);

export default store;
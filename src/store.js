import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { routerEnhancer, routerMiddleware } from './_shared';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  compose(
    routerEnhancer,
    composeEnhancers(
      applyMiddleware(routerMiddleware, thunk)
    )
  ),
);
  
export default store;
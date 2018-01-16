import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { routerEnhancer, routerMiddleware } from './_shared';

const store = createStore(
  reducer,
  compose(
    routerEnhancer,
    applyMiddleware(routerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

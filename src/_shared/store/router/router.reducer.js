import { routerForBrowser } from 'redux-little-router';
import openRoutes from './open.routes';
import authenticatedRoutes from './authenticated.routes';

const routes = Object.assign({}, openRoutes, authenticatedRoutes);
const { reducer, middleware, enhancer } = routerForBrowser({
  routes,
});

export {
  reducer as routerReducer,
  middleware as routerMiddleware,
  enhancer as routerEnhancer,
};
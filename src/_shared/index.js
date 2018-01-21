import { navigationReducer } from './store/navigation/navigation.reducer';
import { sessionReducer } from './store/session/session.reducer';
import { combineReducers } from 'redux';
export {
  routerEnhancer,
  routerMiddleware,
  routerReducer,
} from './store/router/router.reducer.js';

export const sharedReducer = combineReducers({
  navigation: navigationReducer,
  session: sessionReducer
});


import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { sharedReducer as _sharedReducer } from './_shared';
import { dashboardReducer } from './dashboard/';
import { eventsReducer } from './events';
import { guestsReducer } from './guests';
import { routerReducer } from './_shared';

const reducers = {
  _sharedReducer, // {navigation, session }
  eventsReducer,
  guestsReducer,
  dashboardReducer,
  router: routerReducer,
  form: formReducer     // <---- Mounted at 'form'
}
export const reducer = combineReducers(reducers)

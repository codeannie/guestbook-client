
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { dashboardReducer } from './dashboard/';
import { sharedReducer as _sharedReducer } from './_shared';
import { eventsReducer } from './events';
import { guestsReducer } from './guests';

const reducers = {
  _sharedReducer, // {navigation, session }
  eventsReducer,
  guestsReducer,
  dashboardReducer,
  form: formReducer     // <---- Mounted at 'form'
}
export const reducer = combineReducers(reducers)

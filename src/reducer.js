import { combineReducers } from 'redux'
import { sharedReducer as _sharedReducer } from './_shared';
import { dashboardReducer } from './dashboard/';
import { eventsReducer } from './events';
import { guestsReducer } from './guests';
import { routerReducer } from './_shared';
import { LOG_OUT } from './_shared/store/session/session.actions'

const reducers = {
  _sharedReducer, // {navigation, session }
  eventsReducer,
  guestsReducer,
  dashboardReducer,
  router: routerReducer,
}

const appReducer = combineReducers(reducers);

// clear redux state on log out
export const reducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined
  }
  return appReducer(state, action)
}

import { navigationReducer } from './store/navigation/navigation.reducer';
import { sessionReducer } from './store/session/session.reducer';
import { combineReducers } from 'redux';

export const sharedReducer = combineReducers({ navigationReducer, sessionReducer });

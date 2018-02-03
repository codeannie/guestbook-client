import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from '../session/session.actions';

const initialState = {
  fetching: false,
  currentUser: null
};

export const sessionReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN_REQUEST': 
      return {
        ...state,
        fetching: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        currentUser: action.payload.user
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user
      };
    default:
    return state;
  }
};
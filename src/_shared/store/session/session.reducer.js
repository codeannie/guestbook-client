import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from '../session/session.actions';

const initialState = {
  currentUser: null
};

export const sessionReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      return {
        ...state,
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
import { LOGIN_SUCCESS } from '../session/session.actions';

const initialState = {
  currentUser: {}
};

export const sessionReducer = (state = initialState, action) => {
  switch(action.type){
    // checking the action type 
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user
      }
    default:
    return state;
  }
};
import * as authServices from '../../services/auth.service';
// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

// Action Creators 

export const createLoginRequestAction = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    const res = await authServices.login();
    return dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        currentUser: res.data.user
      }
    })
  }
  catch(error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: {
        error,
      }
    })
  }
}

export const createSignUpSuccessAction = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: {
      user
    }
  }
}

export const createLogOutAction = () => {
  return {
    type: LOG_OUT, 
  }
}
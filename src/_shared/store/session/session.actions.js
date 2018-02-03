// Action Types
// export const DEMO_SUCCESS = 'DEMO_SUCCESS';
import * as authServices from '../../services/auth.service';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

// Action Creators 

export const createLoginRequestAction = (user) => async (dispatch) => {
  dispatch({
    type: 'LOGIN_REQUEST'
  })
  const res = await authServices.login();
  return dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      currentUser: res.data.user
    }
  })
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
// Action Types
// export const DEMO_SUCCESS = 'DEMO_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Action Creators 
export const createLoginSuccessAction = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user  //it will be payload.user
    }
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
    type: LOGOUT, 
  }
}
// action - make ajax request to GET
// promise of fetch request (success)
// dispatch async action that returns the object 

// pass action the data that has a type property & payload
// reducer - hey! action has happened, then update the state

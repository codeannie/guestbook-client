const initialState = {
  login: {
    email: '',
    password: '',
    authToken: '', //?
  },
  signup: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
};

export const loginSignupReducer = (state = initialState, action) => {
  switch(action.payload){
    default:
    return state;
  }
};
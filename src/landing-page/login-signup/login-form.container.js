import { connect } from 'react-redux';
import { push } from 'redux-little-router';

import LoginForm from './login-form.component';
import { login } from '../../_shared/services/auth.service';
import { createLoginSuccessAction } from '../../_shared/store/session/session.actions';
// import action

const mapStateToProps = state => {
  console.log(state);
  return {
    // email: state.loginSignUpReducer.login.email,
    // password: state.loginSignUpReducer.login.password
  };
};

// dispatch login info to store
// dispatch location change to router - push to dashboard
// dispatch auth token to store 
const mapDispatchToProps = dispatch => {
  return {
    onLogin(email, password){
      //temporarily pass in actual login 
      login('kuma@bear.com', 'test123')
      // axios makes a request and returns a promise
      // now can do something with it
        .then(res => {
          console.log(res);
          dispatch(createLoginSuccessAction(res.data));
          dispatch(push('/dashboard'));
        });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

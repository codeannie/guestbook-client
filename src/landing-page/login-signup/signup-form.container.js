import { connect } from 'react-redux';
import { push } from 'redux-little-router';

import SignUpForm from './signup-form.component';
import { signup } from '../../_shared/services/auth.service';
import { createSignUpSuccessAction } from '../../_shared/store/session/session.actions';


const mapStateToProps = state => {
  console.log(state);
  return {
    // firstName: state.loginSignUpReducer.signup.firstName,
    // lastName: state.loginSignUpReducer.signup.lastName,
    // email: state.loginSignUpReducer.signup.email,
    // password: state.loginSignUpReducer.signup.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp(firstName, lastName, email, password){
      signup(firstName, lastName, email, password)
        .then(res => {
          console.log(res);
          dispatch(createSignUpSuccessAction(res.data));
          dispatch(push('/dashboard'));
        });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

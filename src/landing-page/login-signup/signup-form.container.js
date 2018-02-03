import { connect } from 'react-redux';
import { push } from 'redux-little-router';
import Cookies from 'js-cookie';
import SignUpForm from './signup-form.component';
import { signup } from '../../_shared/services/auth.service';
import { createLoginRequestAction } from '../../_shared/store/session/session.actions';


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
          Cookies.set('jwt', res.data.authToken);
          Cookies.set('loggedInUserId', res.data.user.id);
          Cookies.set('loggedInUserFirstName', res.data.user.firstName);
          dispatch(createLoginRequestAction(res.data));
          dispatch(push('/dashboard'));
        });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

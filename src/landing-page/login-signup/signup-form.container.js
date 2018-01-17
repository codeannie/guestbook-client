import { connect } from 'react-redux';
import SignUpForm from './signup-form.component';
// import action

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
    //getlogin
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

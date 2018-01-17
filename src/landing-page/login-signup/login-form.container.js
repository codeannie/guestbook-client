import { connect } from 'react-redux';
import LoginForm from './login-form.component';
// import action

const mapStateToProps = state => {
  console.log(state);
  return {
    // email: state.loginSignUpReducer.login.email,
    // password: state.loginSignUpReducer.login.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //getlogin
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

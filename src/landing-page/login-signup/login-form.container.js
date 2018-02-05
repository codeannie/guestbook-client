import { connect } from 'react-redux';
import { push } from 'redux-little-router';
import Cookies from 'js-cookie';
import LoginForm from './login-form.component';
import { login } from '../../_shared/services/auth.service';
import { createLoginRequestAction } from '../../_shared/store/session/session.actions';

const mapStateToProps = state => {
  return {
    fetching: state._sharedReducer.session.fetching, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin(email, password){
      login(email, password)
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

import { connect } from 'react-redux';
import { push } from 'redux-little-router';
import Cookies from 'js-cookie';
import LoginForm from './login-form.component';
import { login } from '../../_shared/services/auth.service';
import { createLoginRequestAction } from '../../_shared/store/session/session.actions';

const mapStateToProps = state => {
  return {
    // fetching: state.eventsReducer.fetching, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin(email, password){
      login(email, password)
      //temporarily pass in actual login 
      // login('demo@guestbook.com', 'test123')
      // axios makes a request and returns a promise
      // now can do something with it
        .then(res => {
          console.log('log in res ->', res);
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

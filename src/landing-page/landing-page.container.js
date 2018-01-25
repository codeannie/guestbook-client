import { connect } from "react-redux";
import { push } from "redux-little-router";
import Cookies from 'js-cookie';
import LandingPage from "./landing-page.component";
import { login } from '../_shared/services/auth.service';
import { createLoginSuccessAction } from '../_shared/store/session/session.actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    // how to connect to form? 
    openLoginForm: () => {
      dispatch(push("/login"));
    },
    openSignUpForm: () => {
      dispatch(push("/signup"));
    },
    onLoginDemo() {
      login('demo@guestbook.com', 'test123')
        .then(res => {
          Cookies.set('jwt', res.data.authToken);
          Cookies.set('loggedInUserId', res.data.user.id);
          Cookies.set('loggedInUserFirstName', res.data.user.firstName);
          dispatch(createLoginSuccessAction(res.data));
          dispatch(push('/dashboard'));
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

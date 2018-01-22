import { connect } from "react-redux";
import { push } from "redux-little-router";
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
    // need to connect?
    onLoginDemo() {
      login("kuma@bear.com", "test123").then(res => {
        dispatch(createLoginSuccessAction(res.data));
        dispatch(push("/dashboard"));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

// put landing page components here
import React from 'react';
import { css } from 'aphrodite';
import { FlatButton } from 'material-ui';
import Header from '../_shared/navigation/header-image.component';
import IntroSection from './intro/intro-section.component';
import LoginForm from './login-signup/login-form.container';
import SignUpForm from './login-signup/signup-form.container';
import styles from './landing-page.styles';
import sharedStyles from '../_shared/styles/shared.styles';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className={css(styles.flexContainer)} style={styles.flex}>

        <FlatButton 
            label="Demo"
            onClick={() => {this.props.onLoginDemo()}}
            style={btnStyle} />

          <FlatButton 
            label="Sign Up"
            onClick={() => {this.props.openSignUpForm()}}
            style={btnStyle} />

          <FlatButton 
            label="Log in"
            onClick={() => {this.props.openLoginForm()}}
            style={btnStyle} />
        </div>
      <div className={css(sharedStyles.mainContainer)}>
        <IntroSection />
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
    )
  }
}

const btnStyle = {
  color: 'white',
  fontSize: 14,
}
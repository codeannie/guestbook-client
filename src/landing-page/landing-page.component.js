// put landing page components here
import React from 'react';
import { FlatButton } from 'material-ui';

import Header from '../_shared/navigation/header-image.component';
import IntroSection from './intro/intro-section.component';
import LoginForm from './login-signup/login-form.container';
import SignUpForm from './login-signup/signup-form.container';
import styles from './landing-page.styles';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="btn-container" style={styles.flex}>
          <FlatButton style={styles.button} label="Sign Up" />
          <FlatButton style={styles.button} label="Log in" />
        </div>
      <div className="landing-container" style={styles.container}>
        <IntroSection />
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
    )
  }
}
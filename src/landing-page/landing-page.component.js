// put landing page components here
import React from 'react';
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
      <div className="landing-container" style={styles.container}>
        <IntroSection />
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
    )
  }
}
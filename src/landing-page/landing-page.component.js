// put landing page components here
import React from 'react';

import Header from '../_shared/navigation/landing-header.component';
import IntroSection from './intro/intro-section.component';
import LoginForm from './login-signup/login-form.component';
import SignUpFrom from './login-signup/signup-form.component';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <Header />
        <p className="App-intro">
          Welcome to Guest Book! This app will change how you plan future events!
        </p>
        <IntroSection />
        <LoginForm />
        <SignUpFrom />
      </div>
    )
  }
}
// put landing page components here
import React from 'react';
import Header from '../_shared/navigation/header-image.component';
import IntroSection from './intro/intro-section.component';
import LoginForm from './login-signup/login-form.container';
import SignUpFrom from './login-signup/signup-form.container';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
      <div className="landing-container">
        <p className="App-intro">
          Welcome to Guest Book! This app will change how you plan future events!
        </p>
        <IntroSection />
        <LoginForm />
        <SignUpFrom />
      </div>
    </div>
    )
  }
}
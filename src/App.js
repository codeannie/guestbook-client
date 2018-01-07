import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';

import IntroSection from './landing-page/intro/intro-section.component';
import LoginForm from './landing-page/login-signup/login-form.component';
import SignUpFrom from './landing-page/login-signup/signup-form.component';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Guest Book</h1>
        </header>
        <p className="App-intro">
          Welcome to Guest Book! This app will change how you plan future events!
        </p>
        <IntroSection />
        <LoginForm />
        <SignUpFrom />
      </div>
    );
  }
}

export default App;

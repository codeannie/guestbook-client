import React, { Component } from "react";
import { Fragment as RouterFragment } from "redux-little-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "./_shared/styles/material-ui.theme";
import LandingPage from "./landing-page/landing-page.container";
import LoginForm from './landing-page/login-signup/login-form.container';
import SignUpForm from './landing-page/login-signup/signup-form.container';
import { Dashboard } from "./dashboard";
import EventPage from '../src/events/event-page.container';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <RouterFragment forRoute="/">
          <div>
            <RouterFragment forRoute="/">
              <LandingPage />
            </RouterFragment>
            <RouterFragment forRoute="/login">
              <LoginForm />
            </RouterFragment>
            <RouterFragment forRoute="/signup">
              <SignUpForm />
            </RouterFragment>
            <RouterFragment forRoute="/dashboard">
              <Dashboard />
            </RouterFragment>
            <RouterFragment forRoute="/event">
              <EventPage />
            </RouterFragment>
          </div>
        </RouterFragment>
      </MuiThemeProvider>
    );
  }
}

export default App;

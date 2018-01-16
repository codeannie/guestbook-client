import React, { Component } from "react";
import "./styles/App.css";
import { Fragment as RouterFragment } from "redux-little-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "./_shared/styles/material-ui.theme";
import LandingPage from "./landing-page/landing-page.component";
import { Dashboard } from "./dashboard";
class App extends Component {
  //not sure if App div is needed
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <RouterFragment forRoute="/">
          <div>
            <RouterFragment forRoute="/">
              <LandingPage />
            </RouterFragment>
            <RouterFragment forRoute="/login">
              <div>Login</div>
            </RouterFragment>
            <RouterFragment forRoute="/dashboard">
              <Dashboard />
            </RouterFragment>
          </div>
        </RouterFragment>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './_shared/styles/material-ui.theme';
import LandingPage from './landing-page/landing-page.component';
import { Dashboard } from './dashboard';
class App extends Component {

  //not sure if App div is needed
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <LandingPage />
          <Dashboard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

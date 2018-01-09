import React, { Component } from 'react';
import './styles/App.css';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import LandingPage from './landing-page/landing-page.component';
class App extends Component {

  //not sure if App div is needed
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <LandingPage />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;

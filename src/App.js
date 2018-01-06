import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">GuestBook</h1>
        </header>
        <p className="App-intro">
          Manage your guests with GuestBook!
        </p>
      </div>
    );
  }
}

export default App;

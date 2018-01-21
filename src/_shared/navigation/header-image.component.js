import React from 'react';
import { FlatButton } from 'material-ui';
import styles from './header-image.styles';

const headerImage = (props) => {
  return (
    <div className="header-bar">
      <header className="App-header" style={styles.headerBackground}>
        <div> <h1 className="App-title" style={styles.title}> - GUEST BOOK - </h1> </div>
        <FlatButton style={styles.button} label="Sign Up" />
        <FlatButton style={styles.button} label="Log in" />
      </header>
    </div>
  )
}

export default headerImage;

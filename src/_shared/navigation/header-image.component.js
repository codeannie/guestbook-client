import React from 'react';
import { FlatButton } from 'material-ui';
import styles from './header-image.styles';

const headerImage = (props) => {
  return (
    // <div className="header-bar">
      <header className="App-header" style={styles.headerBackground}>
        <h1 className="App-title" style={styles.title}> - GUEST BOOK - </h1>
      </header>
    // </div>
  )
}

export default headerImage;

import React from 'react';
import styles from './header-image.styles';

const headerImage = (props) => {
  return (
    <header className="App-header" style={styles.headerBackground}>
      <h1 className="App-title" style={styles.title}> - GUEST BOOK - </h1>
    </header>
  )
}

export default headerImage;

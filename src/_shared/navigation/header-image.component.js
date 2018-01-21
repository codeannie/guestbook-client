import React from 'react';
import styles from './header-image.styles';

const headerImage = (props) => {
  return (
    <div className="header-image" style={styles.headerBackground}>
      <header className="App-header" style={styles.appHeader}>
        {/* <h1 className="App-title" style={styles.title}>Guest Book</h1> */}
      </header>
    </div>
  )
}

export default headerImage;

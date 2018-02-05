import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { css } from 'aphrodite';
import styles from './loading.style';


const LoadingStatus = () => {
  return (
    <div className={css(styles.loadingContainer)}>
      <RefreshIndicator
        size={50}
        left={-20}
        top={10}
        loadingColor="#FF9800"
        status="loading"
        style={style.refresh}
      />
  </div>
  );
};

export default LoadingStatus;

const style = {
  refresh: {
    display: 'inline-block',
    marginLeft: '50%',
  },
};

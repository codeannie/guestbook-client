import React from 'react';
import { css } from 'aphrodite';
import styles from './footer.style';

const Footer = () => (
  <footer role="contentinfo">
    <p className={css(styles.footer)}> Created by Annie Chiang </p>
  </footer>
);

export default Footer; 
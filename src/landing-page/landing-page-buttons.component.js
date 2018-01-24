// put landing page components here
import React from 'react';
import { css } from 'aphrodite';
import { FlatButton } from 'material-ui';
import styles from './landing-page.styles';
import sharedStyles from '../_shared/styles/shared.styles';

const LandingPageBtnsRow = (props) => {
  return (
    <div className={css(styles.flexContainer)} style={styles.flex}>
      <FlatButton
        label="Demo"
        onClick={() => {
          props.onLoginDemo();
        }}
        style={btnStyle}
      />

      <FlatButton
        label="Sign Up"
        onClick={() => {
          props.openSignUpForm();
        }}
        style={btnStyle}
      />

      <FlatButton
        label="Log in"
        onClick={() => {
          props.openLoginForm();
        }}
        style={btnStyle}
      />
    </div>
  );
};

export default LandingPageBtnsRow;

const btnStyle = {
  color: 'white',
  fontSize: 14,
}
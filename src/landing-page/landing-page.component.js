// put landing page components here
import React from 'react';
import { css } from 'aphrodite';
import { FlatButton } from 'material-ui';
import Header from '../_shared/navigation/header-image.component';
import LandingPageBtnsRow from './landing-page-buttons.component';
import IntroSection from './intro/intro-section.component';
import LoginForm from './login-signup/login-form.container';
import SignUpForm from './login-signup/signup-form.container';
import styles from './landing-page.styles';
import sharedStyles from '../_shared/styles/shared.styles';

const LandingPage = (props) => {
  
  const getComponentByRoute = () => {
    switch(props.route) {
      case "/login":
        return <LoginForm />;
      case "/signup":
        return <SignUpForm />;
      default:
        return null; 
    }
  }

    return (
      <div className="main-container">
        <Header />
        <LandingPageBtnsRow {...props} />
        
      <div className={css(sharedStyles.mainContainer)}>
        {getComponentByRoute()}
        <IntroSection />
      </div>
    </div>
    )
  }

export default LandingPage;
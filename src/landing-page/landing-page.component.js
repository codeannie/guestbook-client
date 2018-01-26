// put landing page components here
import React from 'react';
import { css } from 'aphrodite';
import { FlatButton } from 'material-ui';
import Header from '../_shared/navigation/header-image.component';
import LandingPageBtnsRow from './landing-page-buttons.component';
import IntroSection from './intro/intro-section.component';
// import LoginForm from './login-signup/login-form.container';
import SignUpForm from './login-signup/signup-form.container';
import styles from './landing-page.styles';
import sharedStyles from '../_shared/styles/shared.styles';

const LandingPage = (props) => {
    return (
      <div className="main-container">
        <Header />
        <LandingPageBtnsRow {...props} />
        
      <div className={css(sharedStyles.mainContainer)}>
        <IntroSection />
        {/* <LoginForm /> */}
        <SignUpForm />
      </div>
    </div>
    )
  }

export default LandingPage;

{/* (this can be true for loading - create prop of loading)
if header props is true, show header
else, show nothing aka hide 
{this.props.showHeading ? <Header /> : ''} */}
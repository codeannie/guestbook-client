// put landing page components here
import React from 'react';
import { css } from 'aphrodite';
import LandingPageBtnsRow from './landing-page-buttons.component';
import IntroSection from './intro/intro-section.component';
import LoginForm from './login-signup/login-form.container';
import SignUpForm from './login-signup/signup-form.container';
import Footer from '../_shared/navigation/footer.component';
import styles from './landing-page.styles';

export default class LandingPage extends React.Component {
 
  getComponentByRoute = () => {
    switch(this.props.route) {
      case "/login":
        return <LoginForm />;
      case "/signup":
        return <SignUpForm />;
      default:
        return null; 
    }
  }

  render() {
    if (this.props.fetching) {
      return <h1> LOADING... </h1>
    }
    return (
      <div>
        <LandingPageBtnsRow {...this.props} />     
        <div className={css(styles.backgroundContainer, styles.flexContainer)}>
          {this.getComponentByRoute()}
          <IntroSection />
        </div>
        <Footer />
      </div>
    )
  }
}

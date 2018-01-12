import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import LandingPage from '../../landing-page/landing-page.component';
import IntroSection from '../../landing-page/intro/intro-section.component';
import LoginForm from '../../landing-page/login-signup/login-form.component';
import SignUpForm from '../../landing-page/login-signup/signup-form.component';

storiesOf("landing-page", module)
  .add("landing page", () => {
    return <LandingPage/>;
    })
  .add("intro section", () => {
    return <IntroSection />;
  })
  .add("login form", () => {
    return <LoginForm />;
  })
  .add("signup form", () => {
    return <SignUpForm />;
  })

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

import SubmitBtn from '../../_shared/buttons/submit-btn.component'
import ResetBtn from '../../_shared/buttons/reset-btn.component'

class SignUpForm extends React.Component {

  render () {
    const { handleSubmit } = this.props;
    return (
      <div className="signupFormContainer">
        <h2> Sign up for Guest Book </h2>
        <form ref="signUpForm" onSubmit={handleSubmit}>
          <Field 
            label="firstName" 
            name="firstName" 
            component="input" 
            type="text" 
            placeholder="First Name"
            required
            autoFocus />

          <Field 
            label="lastName" 
            name="lastName" 
            component="input" 
            type="text" 
            placeholder="Last Name"
            required
            autoFocus />

          <Field 
            label="email" 
            name="email" 
            component="input" 
            type="text" 
            placeholder="E-mail"
            required
            autoFocus />

          <Field 
            label="password" 
            name="password" 
            component="input" 
            type="text" 
            placeholder="Password"
            required
            autoFocus />
          <SubmitBtn buttonName="Sign Up" />
          <ResetBtn buttonName="Reset" /> 
          </form>
      </div>
    )
  }
}

SignUpForm = reduxForm({
  form: 'signup'
})(SignUpForm);

export default SignUpForm;
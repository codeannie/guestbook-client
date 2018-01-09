import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderTextField, validate } from '../../_shared/material-ui-redux-form.component';
import SubmitBtn from '../../_shared/buttons/submit-btn.component'
import ResetBtn from '../../_shared/buttons/reset-btn.component'

class SignUpForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  render () {
    const { handleSubmit } = this.props;
    return (
      <div className="signupFormContainer">
        <h2> Sign up for Guest Book </h2>
        <form ref="signUpForm" onSubmit={handleSubmit}>
          <Field 
            label="First Name" 
            name="firstName" 
            component={renderTextField} 
            type="text" 
            // placeholder="First Name"
            required
            autoFocus />

          <Field 
            label="Last Name" 
            name="lastName" 
            component={renderTextField}  
            type="text" 
            placeholder="Last Name"
            required
            autoFocus />

          <Field 
            label="E-mail" 
            name="email" 
            component={renderTextField} 
            type="text" 
            // placeholder="E-mail"
            required
            autoFocus />

          <Field 
            label="Password" 
            name="password" 
            component={renderTextField} 
            type="text" 
            // placeholder="Password"
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
  form: 'signup',
  validate
})(SignUpForm);

export default SignUpForm;
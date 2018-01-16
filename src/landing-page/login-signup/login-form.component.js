import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderTextField, validate } from '../../_shared/material-ui-redux-form.component';
import SubmitBtn from '../../_shared/buttons/submit-btn.component'
import ResetBtn from '../../_shared/buttons/reset-btn.component'

class LoginForm extends React.Component {
  handleSubmit = values => {
    // print the form values to the console
    alert('login!');
    console.log(values)
  }

  render() {
    // const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div className="loginFormcontainer">
        <h2> Login </h2>
        <form ref="loginForm" onSubmit={this.handleSubmit}>
          <Field 
            label="E-mail" 
            name="email"  //?
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
          <SubmitBtn buttonName="Login" />
          <ResetBtn buttonName="Reset" />
        </form>
      </div>
    )
  }
}

LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm);

export default LoginForm;

{/* <button type="submit" disabled={pristine || submitting}>
Submit
</button>
<button type="button" disabled={pristine || submitting} onClick={reset}>
Clear Values
</button> */}
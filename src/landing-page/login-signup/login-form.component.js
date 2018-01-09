import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

import SubmitBtn from '../../_shared/buttons/submit-btn.component'
import ResetBtn from '../../_shared/buttons/reset-btn.component'

class LoginForm extends React.Component {
  // handleSubmit = (userLogin) => {
  //   // submit login to server
  //   console.log(userLogin);
  // }

  render() {
    const { handleSubmit } = this.props; //?
    return (
      <div className="loginFormcontainer">
        <h2> Login </h2>
        <form ref="loginForm" onSubmit={handleSubmit}>
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
          <SubmitBtn buttonName="Login" />
          <ResetBtn buttonName="Reset" />
        </form>
      </div>
    )
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
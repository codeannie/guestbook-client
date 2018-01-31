import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { css } from 'aphrodite';
import styles from '../landing-page.styles';
import formStyles from '../../_shared/styles/forms.styles';
import sharedStyles from '../../_shared/styles/shared.styles';
import Header from '../../_shared/navigation/header-image.component';
import LandingPageBtnsRow from '../landing-page-buttons.container';
export default class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
      event.preventDefault();
      const userEmail = event.target.email.value;
      const userPassword = event.target.password.value
      
      console.log('email ->', event.target.email.value);
      console.log('password ->', event.target.password.value);

      this.props.onLogin(userEmail, userPassword); 
      this.refs.loginForm.reset(); 
    }

  render() {
    return (
      <div className="loginFormcontainer">
        <Header />
        <LandingPageBtnsRow {...this.props} />

        <h1 className={css(sharedStyles.headerFont, styles.header1)}> - Login - </h1>
        <form ref="loginForm" 
          onSubmit={this.handleSubmit} 
          className={css(formStyles.formContainer)} >

          <TextField
            name="email"
            floatingLabelText="E-mail"
            type="email"
            className={css(formStyles.input)}
          />

          <TextField
            name="password"
            floatingLabelText="Password"
            type="password"
            className={css(formStyles.input)}
          />
          <div className={css(formStyles.buttonContainer)}>
            <RaisedButton label="Submit" 
              type="submit" 
              primary={true} 
              />

            <RaisedButton 
              label="Reset" 
              type="reset" 
              />
          </div>
        </form>
      </div>
    );
  }
}

// onChange for each input
// update teh state
// submit listener - dispatch teh action and grab the values of the state 
// optional - add to redux store

// login - get response and store token in local storage & redux state
// App.js - check if token is in local storage, if there is, dispatch action to redux 

{/* <label>
E-mail:
<input type="text" ref="email" onChange={this.handleChange} required />
</label>

    
<label>
Password:
<input type="password" ref="password" onChange={this.handleChange} required/>
</label> */}
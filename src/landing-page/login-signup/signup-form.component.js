import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { css } from 'aphrodite';
import Header from '../../_shared/navigation/header-image.component';
import LandingPageBtnsRow from '../landing-page-buttons.component';
import styles from '../landing-page.styles';
import formStyles from '../../_shared/styles/forms.styles';
import sharedStyles from '../../_shared/styles/shared.styles';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const userEmail = event.target.email.value;
    const userPassword = event.target.password.value
    
    console.log('signup inputs ->', firstName, lastName, userEmail, userPassword);
    this.props.onSignUp(firstName, lastName, userEmail, userPassword);
    this.refs.signUpForm.reset(); 

  }
  render() {
    return (
      <div className="signupFormContainer">
        {/* <Header /> need to make this conditional render with button  */}
        <h1 className={css(sharedStyles.headerFont, styles.header1)}> - Signup for Guest Book - </h1>        <form ref="signUpForm" onSubmit={this.handleSubmit} style={formStyles.formContainer}>
          <TextField
            name="firstName"
            floatingLabelText="First name"
            type="text"
            style={formStyles.input}
          />

          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            type="text"
            style={formStyles.input}
          />

          <TextField
            name="email"
            floatingLabelText="E-mail"
            type="text"
            style={formStyles.input}
          />

          <TextField
            name="password"
            floatingLabelText="Password"
            type="password"
            style={formStyles.input}
          />
          <div style={formStyles.buttonContainer}>
            <RaisedButton label="Submit" 
              type="submit" 
              primary={true} 
              style={formStyles.button} />

            <RaisedButton 
              label="Reset" 
              type="reset" 
              style={formStyles.button}/>
          </div>
        </form>
      </div>
    )
  }
}
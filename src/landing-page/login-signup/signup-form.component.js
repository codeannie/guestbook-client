import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
    
    // dispatch action to update redux store w/ values
    // how to capture auth token?
    this.refs.signUpForm.reset(); 

  }
  render() {
    return (
      <div className="signupFormContainer">
        <h2> Sign up for Guest Book </h2>
        <form ref="signUpForm" onSubmit={this.handleSubmit}>
          <TextField
            name="firstName"
            floatingLabelText="First name"
            type="text"
          // onChange={this.handleChange}
          />

          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            type="text"
          // onChange={this.handleChange}
          />

          <TextField
            name="email"
            floatingLabelText="E-mail"
            type="text"
          // onChange={this.handleChange}
          />

          <TextField
            name="password"
            floatingLabelText="Password"
            type="password"
          // onChange={this.handleChange}
          />
          <RaisedButton label="Submit" type="Sign Up" primary={true} />
          <RaisedButton label="Reset" type="reset" />
          </form>
      </div>
    )
  }
}
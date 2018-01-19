import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

export default class GuestForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    // toggle = true? 
    
    // dispatch action to update redux store w/ values
    // how to capture auth token?
    this.refs.guestForm.reset(); 

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

          <Toggle 
            label="Plus One?"
            // onToggle={}
          />

          <RaisedButton label="Save" type="submit" primary={true} />
          <RaisedButton label="Send" secondary={true} />
          <RaisedButton label="Close" />
          </form>
      </div>
    )
  }
}
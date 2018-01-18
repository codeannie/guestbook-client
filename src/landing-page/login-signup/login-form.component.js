import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        <h2> Login </h2>
        <form ref="loginForm" onSubmit={this.handleSubmit}>
          <TextField
            name="email"
            floatingLabelText="E-mail"
            type="text"
          />

          <TextField
            name="password"
            floatingLabelText="Password"
            type="password"
          />

          <RaisedButton label="Submit" type="submit" primary={true} />
          <RaisedButton label="Reset" type="reset" />
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
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      // this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.state = {
      //   email: '',
      //   password: '',
      // };
    }
    
    // handleChange(event) {
    //   this.setState({
    //     email: event.target.email.value,
    //     password: event.target.password.value
    //   });
    // }
  
    handleSubmit(event) {
      event.preventDefault();
      const userEmail = event.target.email.value;
      const userPassword = event.target.password.value
      console.log('email ->', event.target.email.value);
      console.log('password ->', event.target.password.value);
      // dispatch action to update redux store w/ values
      // how to capture auth token?
      this.refs.loginForm.reset(); 
      // handle form validation? 
      // console.log('state->', this.state)
      // this.setState({
      //   email: userEmail,
      //   password: userPassword
      // });
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
            // onChange={this.handleChange}
          />

          <TextField
            name="password"
            floatingLabelText="Password"
            type="password"
            // onChange={this.handleChange}
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
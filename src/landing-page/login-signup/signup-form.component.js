import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    };
    console.log('sign up inputs ->', newUser);
    // store this in redux store and send to server? 
    this.refs.signUpForm.reset();
  }

  render () {
    return (
      <div className="signupFormContainer">
        <form ref="signUpForm" onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" ref="firstName" placeholder="first name" required/>
          </label>
          <label>
            Last Name:
            <input type="text" ref="lastName" placeholder="last name"/>
          </label>
          <label>
            email:
            <input type="email" ref="email" placeholder="email" required/>
          </label>
          <label>
            password:
            <input type="password" ref="password" placeholder="password" required/>
          </label>
          <button type="submit"> Signup </button>
          <button type="reset"> Reset </button> 
        </form>
      </div>
    )
  }
}
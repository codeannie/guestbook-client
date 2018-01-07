import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const login = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    // submit this to get cookie? 
    this.refs.LoginForm.reset();
  }

  render() {
    return (
      <div class="loginFormcontainer">
        <h2> Login </h2> 
        <form ref="loginForm" onSubmit={this.handleSubmit}>
          <label>
            E-mail:
            <input type="email" ref="email" placeholder="email" required />
          </label>
          <label>
            Password:
            <input type="password" ref="password" placeholder="password" required />
          </label>
          <button type="submit"> Login </button>
          <button type="reset"> Reset </button> 
        </form>
      </div> 
    )
  }
}
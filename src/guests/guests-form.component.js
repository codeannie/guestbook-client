import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

export default class GuestForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // need to be able to dynamically add and store inputs for multiple guests? 
    this.state = {
      guest: [{

      }]
    }
  }

  componentWillMount () {
    const { event } = this.props;
    this.props.getEventGuests(event.id);
  }

  handleChange(input) {
    const { guests } = this.state;
    const name = input.target.name;
    const userInput = input.target.value; 

    this.setState({
      guests: {
        ...guests,
        [name]: userInput
      }
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { event } = this.props;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    // const plusOne = e.target.plusOne.value; 
    
    // dispatch action to update redux store w/ values
    this.props.saveGuest(event.id, {firstName, lastName, email});
    this.guestForm.reset(); 

  }

  render() {
    const { firstName, lastName, email } = this.state; //?
    const { guests, event } = this.props;

    const guestListItems = guests.map((guest, index) => {
      return <li key={index}>
        <span>{guest.firstName}</span>
        <span>{guest.lastName}</span>

        <span>{guest.name}</span>
        <span>{guest.email}</span>
        <button onClick={() => {this.props.removeGuest(event.id, guest.id)}}>X</button>
      </li>;
    })

    return (
      <div className="signupFormContainer">
        <h2> Sign up for Guest Book </h2>
        <div>
          <ul>
            {guestListItems}
          </ul>
        </div>
        <form ref={el => this.guestForm = el} onSubmit={this.handleSubmit}>
          <TextField
            name="firstName"
            floatingLabelText="First name"
            onChange={this.handleChange}
            value={firstName}
            type="text"
          />

          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            onChange={this.handleChange}
            value={lastName}
            type="text"
          />

          <TextField
            name="email"
            floatingLabelText="E-mail"
            onChange={this.handleChange}
            value={email}
            type="text"
          />

          {/* <Toggle 
            label="Plus One?"
            onToggle={}
          /> */}

          <RaisedButton label="Save" type="submit" primary={true} />
          <RaisedButton label="Send" secondary={true} />
          <RaisedButton label="Close" />
          </form>
      </div>
    )
  }
}
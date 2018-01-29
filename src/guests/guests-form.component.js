import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

export default class GuestForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
      };
    }

  componentWillMount() {
    const { event } = this.props;
    this.props.getEventGuests(event.id);
  }

  handleChange(input) {
    const { guests } = this.state;
    const name = input.target.name;
    const userInput = input.target.value; 

    this.setState({
      [name]: userInput
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { event } = this.props;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    // const plusOne = e.target.plusOne.value; 
    
    this.props.saveGuest(event.id, {firstName, lastName, email});
    this.refs.guestForm.reset(); 
  }

  render() {
    const { firstName, lastName, email } = this.state; //?
    const { guests, event } = this.props;

    const guestListItems = guests.map((guest, index) => {
      return <li key={index}>
        <span>{guest.firstName}</span>
        <span>{guest.lastName}</span>
        <span>{guest.fullName}</span>
        <span>{guest.name}</span>
        <span>{guest.email}</span>
        <button onClick={() => {this.props.removeGuest(event.id, guest.id)}}>X</button>
      </li>;
    })

    return (
      <div className="guestFormContainer">
        <h2> Guest List for {event.eventName} </h2>
        <div>
          <ul>
            {guestListItems}
          </ul>
        </div>
        <form ref="guestForm" onSubmit={this.handleSubmit}>
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
          {/* <RaisedButton label="Send" secondary={true} /> */}
          <RaisedButton label="Close" onClick={() => this.props.closeForm()}/>
          </form>
      </div>
    )
  }
}
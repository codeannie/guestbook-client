import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { css } from 'aphrodite';
import formStyles from '../_shared/styles/forms.styles';
import sharedStyles from '../_shared/styles/shared.styles';

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
    const { firstName, lastName, email } = this.state; 
    const { guests, event } = this.props;

    const guestListItems = guests.map((guest, index) => {
      return <li key={index}>
        <strong>{guest.fullName}</strong> <span>{guest.email}</span>
        <button onClick={() => {this.props.removeGuest(event.id, guest.id)}}>X</button>
      </li>;
    })

    return (
      <div className="guestFormContainer">
        <h2 className={css(sharedStyles.headerFont)}> Guest List for {event.eventName} </h2>
        <div className={css(formStyles.guestListContainer)}>
          <ul>
            {guestListItems}
          </ul>

        </div>
        <form ref="guestForm" 
          onSubmit={this.handleSubmit} 
          className={css(formStyles.guestFormContainer)}>

          <TextField
            name="firstName"
            floatingLabelText="First name"
            onChange={this.handleChange}
            value={firstName}
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            type="text"
          />

          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            onChange={this.handleChange}
            value={lastName}
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            type="text"
          />

          <TextField
            name="email"
            floatingLabelText="E-mail"
            onChange={this.handleChange}
            value={email}
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            type="text"
          />
            <div className={css(formStyles.buttonContainer)}>
              <RaisedButton label="Save" type="submit" primary={true} />
              {/* <RaisedButton label="Send" secondary={true} /> */}
              <RaisedButton label="Close" onClick={() => this.props.closeForm()}/>
            </div> 
          </form>
      </div>
    )
  }
}

const styles = {
  errorStyle: {
    color: 'blue',
  },
  underlineStyle: {
    borderColor: 'rgba(255, 255, 255, 0.80)',
    // borderColor: 'rgba(030, 030, 030, 0.90)',
  },
  floatingLabelStyle: {
    color: 'rgba(255, 255, 255, 0.80)',
    // color: 'rgba(030, 030, 030, 0.90)',
  },
  floatingLabelFocusStyle: {
    color: 'blue',
  },
};
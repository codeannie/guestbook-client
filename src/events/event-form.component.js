import React from 'react';
import { css } from 'aphrodite';
import { isYesterday } from 'date-fns';
import { 
  DatePicker, 
  TextField, 
  TimePicker, 
  RaisedButton 
} from 'material-ui';

import { ERROR_MESSAGES } from '../_shared/constants';
import formStyles from '../_shared/styles/forms.styles';
import sharedStyles from '../_shared/styles/shared.styles';

export default class EventForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      event: { 
        eventName: '',
        date: null,
        startTime: null,
        endTime: null,
        description: '',
        locationName: '',
        locationAddress: '',
        locationLink: '',
        locationMap: '',
        },
      error: false,
      errorMsg: ''
    }
  }

  handleDate = (e, date) => {
    const { event } = this.state;
    // always set to false in the beginning 
    this.setState({
      error: false,
      errorMsg: ''
    });

    if(isYesterday(date)) {
      this.setState({
        error: true,
        errorMsg: ERROR_MESSAGES.DATE_PAST  //vs 'date cannot be in the past'
      });
    } else {
      this.setState({
        event: {
          ...event,
          date: date
        }
      })
    }
  }

  handleStartTime = (e, time) => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        startTime: time
      }
    })
  }

  handleEndTime = (e, time) => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        endTime: time
      }
    })
  }
  
  handleChange = (input) => {
    const { event } = this.state;
    const name = input.target.name;
    const userInput = input.target.value;

    this.setState({
      event: {
        ...event,
        [name]: userInput
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const user = this.props.currentUser
    // const userId = Cookies.get('loggedInUserId');
    const newEvent = {
      ...this.state.event
    };
    
    console.log('new event->', newEvent)

    this.props.onSubmitNewEvent(newEvent);
    this.refs.eventForm.reset(); 
  }

  render() {
    const { eventName, date, startTime, endTime, description, locationName, locationAddress, locationLink, locationMap } = this.state.event;
    return (
      <div className="form-container">
        <h2 className={css(sharedStyles.headerFont)}> Create an Event </h2>
        <form ref="eventForm" onSubmit={this.handleSubmit} style={formStyles.eventGuestContainer}>

            {/* Example validation */}
            <p style={{
            display: (this.state.error ? "block" : "none"),
            color: "red"
            }}> {this.state.errorMsg} </p>
            
          <TextField
            name="name"
            floatingLabelText="Event Name"
            onChange={this.handleChange}
            value={eventName}
            type="text"
            style={formStyles.input}
          />
          
          <DatePicker 
            hintText="Event Date" 
            mode="landscape" 
            onChange={this.handleDate}
            value={date}
            style={formStyles.dateTime}
            />

          <TimePicker
            hintText="Start Time"
            autoOk={true} 
            onChange={this.handleStartTime}
            value={startTime}
            style={formStyles.input}
            />
                    
          <TimePicker
            hintText="End Time"
            autoOk={true}
            onChange={this.handleEndTime}
            value={endTime} 
            style={formStyles.input}
            />

          <TextField
            name="description"
            floatingLabelText="Description"
            onChange={this.handleChange}
            value={description}
            type="text"
            style={formStyles.input}
          />
            
          <TextField
            name="locationName"
            floatingLabelText="Location Name"
            onChange={this.handleChange}
            value={locationName}
            type="text" 
            style={formStyles.input}
            />

          <TextField
            name="locationAddress"
            floatingLabelText="Location Address"
            onChange={this.handleChange}
            value={locationAddress}
            type="text" 
            style={formStyles.input}
            />

          <TextField
            name="locationLink"
            floatingLabelText="Location Link"
            onChange={this.handleChange}
            value={locationLink}
            type="text" 
            style={formStyles.input}
            />

          <TextField
            name="locationMap"
            floatingLabelText="Google Map Link"
            onChange={this.handleChange}
            value={locationMap}
            type="text" 
            style={formStyles.input}
            />
          <div style={formStyles.buttonContainer}>
            <RaisedButton label="Save" 
              type="submit" 
              primary={true} 
              style={formStyles.button} />

            <RaisedButton 
              label="Reset" 
              type="reset"
              secondary={true} 
              style={formStyles.button}/>

            <RaisedButton 
              label="Cancel" 
              type="button" 
              style={formStyles.button}
              onClick={this.props.closeForm}/>
          </div>
        </form>
      </div>
    )
  }
}
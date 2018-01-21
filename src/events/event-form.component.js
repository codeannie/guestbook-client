import React from 'react';
import isPast from 'date-fns/is_past';
import { 
  DatePicker, 
  TextField, 
  TimePicker, 
  RaisedButton 
} from 'material-ui';

import { ERROR_MESSAGES } from '../_shared/constants';

export default class EventForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      event: { 
        name: null,
        date: null,
        startTime: null,
        endTime: null,
        description: null,
        locationName: null,
        locationAddress: null,
        locationLink: null,
        locationMap: null,
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

    if(isPast(date)) {
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
    const newEvent = {
      ...this.state.event
    };
    
    console.log('new event?', newEvent)

    this.props.createNewEvent(newEvent);
    this.refs.eventForm.reset(); 
  }

  render() {
    const { name, date, startTime, endTime, description, locationName, locationAddress, locationLink, locationMap } = this.state.event;
    return (
      <div className="form-container">
        <h2> Create an Event </h2>
        <form ref="eventForm" onSubmit={this.handleSubmit}>

            {/* Example validation */}
            <p style={{
            display: (this.state.error ? "block" : "none"),
            color: "red"
            }}> {this.state.errorMsg} </p>
            
          <TextField
            name="name"
            floatingLabelText="Event Name"
            onChange={this.handleChange}
            // onChange={event => this.setState({event: {name: event.currentTarget.value}})}
            value={name}
            type="text"
          />
          
          <DatePicker 
            hintText="Event Date" 
            mode="landscape" 
            onChange={this.handleDate}
            value={date} />

          <TimePicker
            hintText="Start Time"
            autoOk={true} 
            onChange={this.handleStartTime}
            value={startTime} />
                    
          <TimePicker
            hintText="End Time"
            autoOk={true}
            onChange={this.handleEndTime}
            value={endTime} />

          <TextField
            name="description"
            floatingLabelText="Description"
            onChange={this.handleChange}
            value={description}
            type="text"
          />
            
          <TextField
            name="locationName"
            floatingLabelText="Location Name"
            onChange={this.handleChange}
            value={locationName}
            type="text" />

          <TextField
            name="locationAddress"
            floatingLabelText="Location Address"
            onChange={this.handleChange}
            value={locationAddress}
            type="text" />

          <TextField
            name="locationLink"
            floatingLabelText="Location Link"
            onChange={this.handleChange}
            value={locationLink}
            type="text" />

          <TextField
            name="locationMap"
            floatingLabelText="Google Map Link"
            onChange={this.handleChange}
            value={locationMap}
            type="text" />

          <RaisedButton label="Save" type="submit" primary={true} />
          <RaisedButton label="Send" secondary={true} />
          <RaisedButton label="Close" />
        </form>
      </div>
    )
  }
}
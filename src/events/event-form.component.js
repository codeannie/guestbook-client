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
        eventName: null,
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

  handleDate = (event, date) => {
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
        date: date
      })
    }
  }

  handleStartTime = (event, time) => {
    this.setState({
      startTime: time
    })
  }

  handleEndTime = (event, time) => {
    console.log('end time? ->', time)
    this.setState({
      endTime: time
    })
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
            name="eventName"
            floatingLabelText="Event Name"
            type="text"
          />
          
          <DatePicker 
            hintText="Event Date" 
            mode="landscape" 
            onChange={this.handleDate}
            value={this.state.date} />

          <TimePicker
            hintText="Start Time"
            autoOk={true} 
            onChange={this.handleStartTime}
            value={this.state.startTime} />
                    
          <TimePicker
            hintText="End Time"
            autoOk={true}
            onChange={this.handleEndTime}
            value={this.state.endTime} />

          <TextField
            name="eventDescription"
            floatingLabelText="Description"
            type="text"
          />
          
          <TextField
            name="description"
            floatingLabelText="Description"
            type="text" />
            
          <TextField
            name="locationName"
            floatingLabelText="Location Name"
            type="text" />

          <TextField
            name="locationAddress"
            floatingLabelText="Location Address"
            type="text" />

          <TextField
            name="locationLink"
            floatingLabelText="Location Link"
            type="text" />

          <TextField
            name="locationMap"
            floatingLabelText="Google Map Link"
            type="text" />

          <RaisedButton label="Save" type="submit" primary={true} />
          <RaisedButton label="Send" secondary={true} />
          <RaisedButton label="Close" />
        </form>
      </div>
    )
  }
}
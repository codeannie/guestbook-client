import React from 'react';
import { css } from 'aphrodite';
import isPast from 'date-fns/is_past';
import { 
  DatePicker, 
  TextField, 
  TimePicker, 
  RaisedButton 
} from 'material-ui';

import { ERROR_MESSAGES } from '../_shared/constants';
import formStyles from '../_shared/styles/forms.styles';
import sharedStyles from '../_shared/styles/shared.styles';

export default class EditEventForm extends React.Component{
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
  
  componentDidMount() {
  // did component mount
  // if mounteded, add event
  // if not, fetch from mongod
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
    const modifiedEvent = {
      ...this.state.event
    };
    
    console.log('modified event', modifiedEvent)

    this.props.onModifyEvent(modifiedEvent);
    this.refs.editEventForm.reset(); 
  }

  render() {
    const { eventName, 
      eventId, 
      date, 
      startTime, 
      endTime, 
      description, 
      locationName, 
      locationAddress, 
      locationLink, 
      locationMap } = this.props;

    // how to capture local state and from props? 
    // const { eventName, 
    //   date, 
    //   startTime, 
    //   endTime, 
    //   description, 
    //   locationName, 
    //   locationAddress, 
    //   locationLink, 
    //   locationMap } = this.state;

    return (
      <div className="form-container">
        <h2 className={css(sharedStyles.headerFont)}> Edit {eventName} </h2>
        <form ref="editEventForm" onSubmit={this.handleSubmit} style={formStyles.eventGuestContainer}>

            {/* Example validation */}
            {/* <p style={{
            display: (this.state.error ? "block" : "none"),
            color: "red"
            }}> {this.state.errorMsg} </p>
             */}
        
          <TextField
            name="name"
            floatingLabelText="Event Name"
            onChange={this.handleChange}
            defaultValue={eventName}
            type="text"
            style={formStyles.input}
          />
          
          <DatePicker 
            hintText="Event Date" 
            mode="landscape" 
            onChange={this.handleDate}
            defaultValue={date}
            // value={date}
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
              onClick={this.props.closeForm}
              />

            <RaisedButton 
              label="Guest List" 
              type="button"
              primary={true} 
              style={formStyles.button}
              onClick={() => this.props.openGuestList(eventId)}
              />
          </div>
        </form>
      </div>
    )
  }
}
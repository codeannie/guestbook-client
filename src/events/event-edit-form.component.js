import React from 'react';
import { css } from 'aphrodite';
import { format, isBefore, parse } from 'date-fns';
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
      // local state stores existing data from redux
      event: { 
        eventName: props.eventName,
        date: props.date,
        startTime: props.startTime,
        endTime: props.endTime,
        description: props.description,
        locationName: props.locationName,
        locationAddress: props.locationAddress,
        locationLink: props.locationLink,
        locationMap: props.locationMap,
        },
      error: false,
      errorMsg: ''
    }
  }
  
  componentDidMount() {
  // did component mount
  // if mounted, add event
  // if not, fetch from mongod
  }

  handleDate = (e, date) => {
    const { event } = this.state;
    const todayDate = format(new Date(), 'MM/DD/YYYY'); 
    // always set to false in the beginning 
    this.setState({
      error: false,
      errorMsg: ''
    });

    if(isBefore(date, todayDate)) {
      this.setState({
        error: true,
        errorMsg: ERROR_MESSAGES.DATE_PAST  
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
  
  handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      ...this.state.event
    };
    console.log('updated event ->', updatedEvent)
    this.props.onSubmitUpdatedEvent(updatedEvent, this.props.eventId);
    this.refs.editEventForm.reset(); 
  }

  render() {
    const {
      eventName, 
      date, 
      startTime, 
      endTime, 
      description, 
      locationName, 
      locationAddress, 
      locationLink, 
      locationMap } = this.state.event;

    return (
      <div className="form-container">
        <h2 className={css(sharedStyles.headerFont)}> Edit Mode for {eventName} </h2>
        <form ref="editEventForm" 
          onSubmit={this.handleSubmit} 
          className={css(formStyles.eventFormContainer)}>

            {/* Example validation */}
            <p style={{
            display: (this.state.error ? "block" : "none"),
            color: "red"
            }}> {this.state.errorMsg} </p>
            
        
          <TextField
            name="name"
            floatingLabelText="Event Name"
            value={eventName}
            onChange={(e, eventName)=> this.setState({event: {...this.state.event, eventName}})}
            type="text"
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
          />
          
          <DatePicker 
            floatingLabelText="Event Date" 
            mode="landscape" 
            value={parse(date)}
            onChange={this.handleDate}
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TimePicker
            floatingLabelText="Start Time"
            autoOk={true} 
            value={parse(startTime)}
            onChange={this.handleStartTime}
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />
                    
          <TimePicker
            floatingLabelText="End Time"
            autoOk={true}
            value={parse(endTime)}
            onChange={this.handleEndTime}
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TextField
            name="description"
            floatingLabelText="Description"
            value={description}
            onChange={(e, description)=> this.setState({event: {...this.state.event, description}})}
            type="text"
            className={css(formStyles.input)}
          />
            
          <TextField
            name="locationName"
            floatingLabelText="Location Name"
            value={locationName}
            onChange={(e, locationName)=> this.setState({event: {...this.state.event, locationName}})}
            type="text" 
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TextField
            name="locationAddress"
            floatingLabelText="Location Address"
            value={locationAddress}
            onChange={(e, locationAddress)=> this.setState({event: {...this.state.event, locationAddress}})}
            type="text" 
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TextField
            name="locationLink"
            floatingLabelText="Location Link"
            value={locationLink}
            onChange={(e, locationLink)=> this.setState({event: {...this.state.event, locationLink}})}
            type="text" 
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TextField
            name="locationMap"
            floatingLabelText="Google Map Link"
            value={locationMap}
            onChange={(e, locationMap)=> this.setState({event: {...this.state.event, locationMap}})}
            type="text" 
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <div className={css(formStyles.buttonContainer)}>
            <RaisedButton label="Save" 
              type="submit" 
              primary={true} 
              />

            <RaisedButton 
              label="Guest List" 
              type="button"
              secondary={true} 
              onClick={() => this.props.openGuestList(this.props.eventId)}
              />

            <RaisedButton 
              label="Cancel" 
              type="button" 
              onClick={this.props.closeForm}
              />

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
    // borderColor: 'rgba(255, 255, 255, 0.80)',
    borderColor: 'rgba(030, 030, 030, 0.90)',
  },
  floatingLabelStyle: {
    // color: 'rgba(255, 255, 255, 0.80)',
    color: '#754148',
  },
  floatingLabelFocusStyle: {
    color: 'blue',
  },
};
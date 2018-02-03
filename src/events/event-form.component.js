import React from 'react';
import { css } from 'aphrodite';
import { format, isBefore } from 'date-fns';
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
    const todayDate = format(new Date(), 'MM/DD/YYYY'); 
    // always set to false in the beginning 
    this.setState({
      error: false,
      errorMsg: ''
    });

    if(isBefore(date, todayDate)) {
      this.setState({
        error: true,
        errorMsg: ERROR_MESSAGES.DATE_PAST  //vs 'date cannot be in the past'
      });

    } else {
      this.setState({
        event: {
          ...event,
          date: date
          // date: format(date, 'MM/DD/YYYY')
        }
      })
    }
  }

  handleStartTime = (e, time) => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        startTime: time,
        // startTime: format(time, 'hh:mm A')
      }
    })
  }

  handleEndTime = (e, time) => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        endTime: time,
        // endTime: format(time, 'hh:mm A')
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
      ...this.state.event,
      // date: format(this.state.event.date,'MM/DD/YYYY'),
      // startTime: format(this.state.event.startTime, 'hh:mm A'),
      // endTime: format(this.state.event.endTime, 'hh:mm A')
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
        <form ref="eventForm" 
          onSubmit={this.handleSubmit} 
          className={css(formStyles.eventFormContainer)}>

            {/* Example validation */}
            <p style={{
            display: (this.state.error ? "block" : "none"),
            color: "red"
            }}> {this.state.errorMsg} </p>
            
          <TextField
            name="eventName"
            floatingLabelText="Event Name"
            onChange={this.handleChange}
            value={eventName}
            type="text"
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
          />
          
          <DatePicker 
            floatingLabelText="Event Date" 
            mode="landscape" 
            onChange={this.handleDate}
            value={date}
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TimePicker
            floatingLabelText="Start Time"
            autoOk={true} 
            onChange={this.handleStartTime}
            value={startTime}
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />
                    
          <TimePicker
            floatingLabelText="End Time"
            autoOk={true}
            onChange={this.handleEndTime}
            value={endTime} 
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TextField
            name="description"
            floatingLabelText="Description"
            onChange={this.handleChange}
            value={description}
            type="text"
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
          />
            
          <TextField
            name="locationName"
            floatingLabelText="Location Name"
            onChange={this.handleChange}
            value={locationName}
            type="text" 
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TextField
            name="locationAddress"
            floatingLabelText="Location Address"
            onChange={this.handleChange}
            value={locationAddress}
            type="text" 
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TextField
            name="locationLink"
            floatingLabelText="Location Link"
            onChange={this.handleChange}
            value={locationLink}
            type="text" 
            className={css(formStyles.input)}
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineStyle={styles.underlineStyle}
            />

          <TextField
            name="locationMap"
            floatingLabelText="Google Map Link"
            onChange={this.handleChange}
            value={locationMap}
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
              label="Reset" 
              type="reset"
              secondary={true} 
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
    color: 'rgba(030, 030, 030, 0.90)',
  },
  floatingLabelFocusStyle: {
    color: 'blue',
  },
};
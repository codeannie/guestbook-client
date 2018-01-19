import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, DatePicker, TimePicker } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';

// class EventForm extends React.Component{
let EventForm = (props) => {
  // handleSubmit(values) {
  //   console.log(values);
  // }

  // render() {
    const { handleSubmit } = props;
  
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Field label="Event Name"
            name="eventName"
            component={TextField}
            floatingLabelText="Event Name"/>
          
          <Field label="Date"
            name="date"
            component={DatePicker}
            format={null} 
            floatingLabelText="Date"/>
          
          <Field label="Start Time"
            name="startTime"
            component={TimePicker}
            format={null} 
            floatingLabelText="Start Time" />

          <Field label="End Time"
            name="endTime"
            component={TimePicker}
            format={null} 
            floatingLabelText="End Time" />
          
          <Field label="Location Name"
            name="locationName"
            component={TextField}
            floatingLabelText="Location Name" />

          <Field label="Location Address"
            name="locationAddress"
            component={TextField}
            floatingLabelText="Location Address" />

          <Field label="Location Link"
            name="locationLink"
            component={TextField}
            floatingLabelText="Location Link" />

          <RaisedButton label="Save" type="submit" primary={true} />
          <RaisedButton label="Send" secondary={true} />
          <RaisedButton label="Close" />
        </form>
      </div>
    )
  }
// }

export default EventForm = reduxForm({
  form: 'event'
})(EventForm);

// export default EventForm;
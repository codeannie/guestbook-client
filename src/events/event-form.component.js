import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, DatePicker, TimePicker } from 'redux-form-material-ui'
import SubmitBtn from '../_shared/buttons/submit-btn.component'
import ResetBtn from '../_shared/buttons/reset-btn.component'
import CancelBtn from '../_shared/buttons/cancel-btn.component'

class EventForm extends React.Component{
  render() {
    const { handleSubmit } = this.props;
  
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

          <SubmitBtn buttonName="Create" />
          <ResetBtn buttonName="Reset" />
          <CancelBtn buttonName="Cancel" />
        </form>
      </div>
    )
  }
}

EventForm = reduxForm({
  form: 'event'
})(EventForm);

export default EventForm;
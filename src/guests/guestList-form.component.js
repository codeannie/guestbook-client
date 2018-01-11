import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, Toggle } from 'redux-form-material-ui'
import SubmitBtn from '../_shared/buttons/submit-btn.component'
import ResetBtn from '../_shared/buttons/reset-btn.component'
import CancelBtn from '../_shared/buttons/cancel-btn.component'
import SendBtn from '../_shared/buttons/send-btn.component'

class GuestForm extends React.Component{
  render() {
    const { handleSubmit } = this.props;
  
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        {/* with MUI component */}
          <Field label="First Name"
          name="firstName"
          component={TextField}
          floatingLabelText="First Name"/>

          <Field label="Last Name"
          name="lastName"
          component={TextField}
          floatingLabelText="Last Name" />

          <Field label="E-mail"
          name="email"
          component={TextField}
          floatingLabelText="E-mail" />

          <Field
          name="plusOne"
          component={Toggle}
          label="Plus One?"
          labelPosition="right"/>

          <SubmitBtn buttonName="Save" />
          <SendBtn buttonName="Send" />
          <CancelBtn buttonName="Close" />
        </form>
      </div>
    )
  }
}

GuestForm = reduxForm({
  form: 'guests'
})(GuestForm);

export default GuestForm;

// redux form only
{/* <label>First Name</label>
<Field 
  name="firstName"
  type="text"
  component="input" />

<label>Last Name</label>
<Field 
  name="lastName"
  type="text"
  component="input" />

<label>E-Mail</label>
<Field 
  name="email"
  type="email"
  component="input" />

<label>Plus One Needed?</label>
<Field
  name="plusOne"
  component="input"
  type="checkbox"
/> */}
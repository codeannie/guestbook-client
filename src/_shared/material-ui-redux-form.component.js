import React from 'react';
import TextField from 'material-ui/TextField';

export const validate = values => {
  const errors = {}
  const requiredFields = [ 'E-mail', 'Password', 'First Name', 'Last Name' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export const renderTextField = ({ 
  input, 
  label, 
  meta: { 
    touched, 
    error 
  }, 
  // ...custom 
}) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    // {...custom}
  />
)
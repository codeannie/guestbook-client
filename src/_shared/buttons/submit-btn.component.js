import React from 'react';
import styles from './submit-btn.styles';
// can style this button 
const submitButton = (props) => {
  return (
    <button type="submit" style={styles.submitBtn}>
      {props.buttonName}
    </button> 
  )
}

export default submitButton; 


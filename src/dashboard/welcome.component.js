import React from 'react';

const welcomeBlurb = (props) => {
  return (
    <div className="welcomeBlurb">
      <p> Welcome, {props.firstName} </p>
    </div> 
  )
}

export default welcomeBlurb;

welcomeBlurb.defaultProps = {
  firstName: ''
};
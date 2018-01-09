import React from 'react';

const welcomeBlurb = (props) => {
  return (
    <div className="welcomeBlurb">
      <h2> Welcome, {props.firstName} </h2>
    </div> 
  )
}

export default welcomeBlurb;

welcomeBlurb.defaultProps = {
  firstName: ''
};
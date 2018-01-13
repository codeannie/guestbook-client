import React from 'react';

const guestResponse = (props) => {
  const {
    name,
    email,
    guestByStatus = [] // default value? 
    // plusOne?
  } = props;

    // how to capture guest id from db? 
  return (
    <ol className="guest">
      {guestByStatus}
    </ol>
  )
}

export default guestResponse;

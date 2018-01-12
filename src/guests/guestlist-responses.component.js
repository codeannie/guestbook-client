import React from 'react';

const guestResponse = (props) => {
  const {
    name,
    email,
    //plusOne?
  } = props;

  return (
    <ol type="1" className="guest">
      <li className="guestInfo"> {props.name}, {props.email} </li>
    </ol>
  )
}

export default guestResponse;

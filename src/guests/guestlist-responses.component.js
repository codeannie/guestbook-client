import React from 'react';

const guestResponse = (props) => {
  return (
    <ul className="guest">
      <li className="firstName"> {props.firstName} </li>
      <li className="lastName"> {props.lastName} </li>
      <li className="email"> {props.email} </li>
      <li className="plusOne"> {props.plusOne} </li>
    </ul>
  )
}

export default guestResponse;

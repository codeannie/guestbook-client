// this is the card for an event -- shared with upcoming & past?

import React from 'react';

const eventCard = (props) => {
  return (
    <div className="eventCard">
      <h3> {props.eventName} </h3>
      {/* put this in list or p? */}
      <ul className="eventCardDetails">
        <li className="eventDate"> {props.eventDate} </li>
        <li className="eventStartTime"> {props.eventStartTime} </li>
        <li className="eventEndTime"> {props.eventEndTime} </li>
        <li className="eventLocationName"> {props.eventLocationName} </li>
        <li className="guestNumber"> {props.guestNumber} </li>
      </ul>
      <button> View </button> 
    </div>
  );
};

export default eventCard;

// eventCard.defaultProps = {
//   eventName: 'Test Event',
//   eventDate: '2/1/18',
//   eventTime: '1PM',
//   eventLocation: 'Somewhere over the rainbow',
//   guestNumber: 10
// }
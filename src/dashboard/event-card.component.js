// this is the card for an event -- shared with upcoming & past?

import React from 'react';

// is this correct? 
// do mapping here? 
const upcomingEventCard = (props) => {
  return (
    <div className="upcomingEventCard">
      <h3> {props.eventName} </h3>
      {/* put this in list or p? */}
      <ul className="eventCardDetails">
        <li className="eventDate"> {props.eventDate} </li>
        <li className="eventTime"> {props.eventTime} </li>
        <li className="eventLocation"> {props.eventLocationName} </li>
        <li className="guestNumber"> {props.guestNumber} </li>
      </ul>
      <button> View </button> 
    </div>
  );
};

// default props?
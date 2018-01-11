// this is the card for an event -- shared with upcoming & past?

import React from 'react';

const eventCard = (props) => {

    // stateless so can't use this.props
  const {
    eventName,
    date,
    startTime,
    endTime,
    locationName,
    numOfGuests
  } = props;
  
  console.log('is the event card working?', props);
  return (
    <div className="eventCard">
      <h3> this is a card! </h3>
      <h3> {props.eventName} </h3>
        <p> {props.date} </p>
        <p> {props.startTime} </p>
        <p> {props.endTime} </p>
        <p> {props.locationName} </p>
        <p> {props.numOfGuests} </p>
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

{/* put this in list or p? */}
{/* <ul className="eventCardDetails">
  <li className="eventDate"> Date: {props.eventDate} </li>
  <li className="eventStartTime"> Start Time: {props.eventStartTime} </li>
  <li className="eventEndTime"> End Time: {props.eventEndTime} </li>
  <li className="eventLocationName"> Location: {props.eventLocationName} </li>
  <li className="guestNumber"> {props.guestNumber} </li>
</ul> */}
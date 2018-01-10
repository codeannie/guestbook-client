import React from 'react';

const eventDetails = (props) => {
  return (
    <div className="event-info">
      <ul className="eventDetails">
        <li className="date"> {props.date} </li>
        <li className="startTime"> {props.startTime} </li>
        <li className="endTime"> {props.endTime} </li>
        <li className="locationName"> {props.locationName} </li>
        <li className="locationAddress"> {props.locationAddress} </li>
        <li className="locationLink"> {props.locationLink} </li>
      </ul>
    </div>
  )
}

export default eventDetails; 
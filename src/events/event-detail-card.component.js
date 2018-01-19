import React from 'react';

const eventDetailsCard = (props) => {
  return (
    <div className="event-info">
      <h3> {props.eventName} </h3>
      <ul className="eventDetails">
        <li className="description"> {props.description} </li>
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

export default eventDetailsCard; 
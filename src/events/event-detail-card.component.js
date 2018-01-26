import React from 'react';
import { css } from 'aphrodite'; 
import styles from './event.styles';
import sharedStyles from '../_shared/styles/shared.styles';

const eventDetailsCard = (props) => {
  return (
    <div className="event-info" key={props.eventId}>
      <h2> {props.eventName} </h2>
      <ul className={css(sharedStyles.lists)}>
        <li className="description"> Description: {props.description} </li>
        <li className="date"> Date: {props.date} </li>
        <li className="startTime"> Start Time: {props.startTime} </li>
        <li className="endTime"> End Time: {props.endTime} </li>
        <li className="locationName"> Location Name: {props.locationName} </li>
        <li className="locationAddress"> Address: {props.locationAddress} </li>
        <li className="locationLink"> Link: {props.locationLink} </li>
        <li className="locationMap"> Map: {props.locationLink} </li>
      </ul>
    </div>
  )
}

export default eventDetailsCard; 
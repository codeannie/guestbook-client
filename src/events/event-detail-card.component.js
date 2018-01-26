import React from 'react';
import { RaisedButton } from 'material-ui';
import { css } from 'aphrodite'; 
import styles from './event.styles';
import sharedStyles from '../_shared/styles/shared.styles';

const eventDetailsCard = (props) => {
  // const { event } = props;
  // console.log('event detail card id?', props.eventId);

  // const handleEditEvent = () => {
  //   props.onEditClick(eventId); 
  // };

  return (
    <div className="event-info" key={props.eventId}>
        {/* <RaisedButton label="Edit" 
        onClick={handleEditEvent(props.eventId)} 
        primary={true} 
        /> */}
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
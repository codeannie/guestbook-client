import React from 'react';
import { RaisedButton } from 'material-ui';
import { format } from 'date-fns';
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
    <section className={css(styles.eventDetails)} key={props.eventId}>
        {/* <RaisedButton label="Edit" 
        onClick={handleEditEvent(props.eventId)} 
        primary={true} 
        /> */}
      <ul className={css(sharedStyles.lists)}>
        <li className="description"> Description: {props.description} </li>
        <li className="date"> Date: {format(props.date, 'MM/DD/YYYY')}  </li>
        <li className="startTime"> Start Time: {format(props.startTime, 'hh:mm A')} </li>
        <li className="endTime"> End Time: {format(props.endTime, 'hh:mm A')} </li>
        <li className="locationName"> Location Name: {props.locationName} </li>
        <li className="locationAddress"> Address: {props.locationAddress} </li>
        <li className="locationLink"> Link: {props.locationLink} </li>
        <li className="locationMap"> Map: {props.locationLink} </li>
      </ul>
    </section>
  )
}

export default eventDetailsCard; 
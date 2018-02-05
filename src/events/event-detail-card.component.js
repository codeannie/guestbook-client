import React from 'react';
import { format } from 'date-fns';
import { css } from 'aphrodite'; 
import styles from './event.styles';
import sharedStyles from '../_shared/styles/shared.styles';

const eventDetailsCard = (props) => {

  return (
    <section className={css(styles.eventDetails)} key={props.eventId}>
      <ul className={css(sharedStyles.lists)}>
        <li className="description"> <strong> Description: </strong> {props.description} </li>
        <li className="date"> <strong> Date: </strong> {format(props.date, 'MM/DD/YYYY')}  </li>
        <li className="startTime"> <strong> Start Time: </strong> {format(props.startTime, 'hh:mm A')} </li>
        <li className="endTime"> <strong> End Time: </strong> {format(props.endTime, 'hh:mm A')} </li>
        <li className="locationName"> <strong> Location Name: </strong> {props.locationName} </li>
        <li className="locationAddress"> <strong> Address: </strong> {props.locationAddress} </li>
        <li className="locationLink"> <strong> Link: </strong> {props.locationLink} </li>
        <li className="locationMap"> <strong> Map: </strong> {props.locationLink} </li>
      </ul>
    </section>
  )
}

export default eventDetailsCard; 
import React from 'react';
import { RaisedButton } from 'material-ui';
import { format } from 'date-fns';
import { css } from 'aphrodite';
import styles from './dashboard.styles';

const eventCard = (props) => {
  // container adds or overrides props on component
  const {
    eventId,
    eventName,
    date,
    startTime,
    locationName,
    onViewClick
  } = props;

  const handleViewClick = () => {
    onViewClick(eventId);
  };

  return (
    <div className={css(styles.eventCard)} key={eventId}>
      <h3 className={css(styles.eventName)}> {eventName} </h3>
        <h4 className={css(styles.date)}> {format(date, 'MM/DD/YYYY')} </h4>
        <p> <strong> Start Time: </strong> {format(startTime, 'hh:mm A')} </p>
        <p> <strong> Location: </strong> {locationName} </p>
      <RaisedButton label="View" onClick={handleViewClick} primary={true} />
    </div>
  );
};

export default eventCard;
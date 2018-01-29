import React from 'react';
import { RaisedButton } from 'material-ui';
import { css } from 'aphrodite';
import styles from './dashboard.styles';

const eventCard = (props) => {
  // container adds or overrides props on component
  const {
    eventId,
    eventName,
    date,
    startTime,
    endTime,
    locationName,
    numOfGuests,
    onViewClick
  } = props;

  const handleViewClick = () => {
    onViewClick(eventId);
  };

  // console.log('is the event card working?', props);
  return (
    <div className={css(styles.eventCard)} key={eventId}>
      <h3 className={css(styles.eventName)}> {eventName} </h3>
        <h4 className={css(styles.date)}> {date} </h4>
        <p> <span> Start Time: </span> {startTime} </p>
        <p> <span> End Time: </span> {endTime} </p>
        <p> <span> Location: </span> {locationName} </p>
        <p> <span> # of Guests: </span> {numOfGuests} </p>
      <RaisedButton label="View" onClick={handleViewClick} primary={true} />
      {/* <button onClick={handleViewClick}> View </button> */}
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
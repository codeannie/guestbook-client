import React from 'react';
import { RaisedButton } from 'material-ui';
import { css } from 'aphrodite'; 
import EventDetailsCard from './event-detail-card.component';
import GuestList from '../guests/guestlist-view.container';
import styles from './event.styles';

export default class EventOverview extends React.Component{

  handleEditEvent = (eventId) => {
    this.props.onEditClick(eventId); 
  };

  render() {
    const { event, eventId } = this.props;
    console.log('event id?', this.props.eventId);
    return !event ? (
      <div><h2>No Event Found</h2></div>
    ) : (
      <section className={css(styles.container)}>
          <RaisedButton label="Edit" 
            onClick={() => this.handleEditEvent(eventId)} 
            primary={true} 
            />
          <EventDetailsCard eventId={event.id} {...event} />
        <GuestList />
      </section>
    )
  }
}

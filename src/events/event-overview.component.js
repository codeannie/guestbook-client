import React from 'react';
import { RaisedButton } from 'material-ui';
import { css } from 'aphrodite'; 
import EventDetailsCard from './event-detail-card.component';
import GuestList from '../guests/guestlist-view.container';
import styles from './event.styles';
import formStyles from '../_shared/styles/forms.styles'

export default class EventOverview extends React.Component{

  handleEditEvent = (eventId) => {
    this.props.onEditClick(eventId); 
  };

  render() {
    const { event, eventId } = this.props;
    return !event ? (
      <div><h2>No Event Found</h2></div>
    ) : (
      <div>
        <section className={css(styles.mainContainer)}>
          <h2 className={css(styles.eventName)}> {event.eventName} Overview </h2>
            <EventDetailsCard eventId={event.id} {...event} />
          <h2 className={css(styles.eventName)}> Guest List</h2>
            <GuestList />
        </section>
        <div className={css(formStyles.buttonContainer)}>
          <RaisedButton label="Edit" 
            onClick={() => this.handleEditEvent(eventId)} 
            primary={true} 
            />

          <RaisedButton 
            label="Close" 
            onClick={this.props.closeForm}
            />
        </div>
      </div>
    )
  }
}

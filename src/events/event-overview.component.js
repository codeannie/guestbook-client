import React from 'react';

import EventInfo from './event-details.component';
import GuestList from '../guests/guestlist-view.component';

export default class EventOverview extends React.Component{
  render() {
    // chnage to this.props later
    const eventDetails = this.props.events.map((event, index) =>
      <div className="event" key={index}>
        <EventInfo {...event} />
      </div>
    );
    // add button to click to add to guests?
    return (
      <section className="event-overview">
        {eventDetails}
        <GuestList />
      </section>
    )
  }
}


import React from 'react';

import EventDetailsCard from './event-detail-card.component';
// import GuestList from '../guests/guestlist-view.component';
import GuestList from '../guests/guestlist-view.container';

export default class EventOverview extends React.Component{
  render() {
      const { event } = this.props;
    // add button to click to add to guests?
    return !event ? (
      <div><h2>No Event Found</h2></div>
    ) : (
      <section className="event-overview">
        <div className="event">
          <EventDetailsCard {...this.props.event} />
        </div>
        <GuestList />
      </section>
    )
  }
}

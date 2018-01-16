import React from 'react';
import EventForm from '../events/event-form.component';
import EventOverview from '../events/event-overview.container';
import GuestForm from '../guests/guestlist-form.component';
import GuestList from '../guests/guestlist-view.component';

export default class EventPage extends React.Component {
  render() {
    return (
      <div className="eventPage">
        <EventForm />
        <EventOverview />
        <GuestForm />
      </div>
    )
  }
}
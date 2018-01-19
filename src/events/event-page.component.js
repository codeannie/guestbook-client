import React from 'react';
import EventForm from '../events/event-form.component';
import EventOverview from '../events/event-overview.container';
import GuestForm from '../guests/guestlist-form.component';
import GuestList from '../guests/guestlist-view.component';

export default class EventPage extends React.Component {
  submit = values => {
    console.log('event form submission', values);
  }
  render() {
    return (
      <div className="eventPage">
        <EventOverview />
        <EventForm onSubmit={this.submit}/>
        <GuestForm />
      </div>
    )
  }
}
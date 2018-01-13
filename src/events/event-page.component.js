import React from 'react';
import EventForm from '../events/event-form.component';
import EventOverview from '../events/event-overview.container';
import GuestForm from '../guests/guestList-form.component';
import GuestList from '../guests/guestlist-view.component';

export default class EventPage extends React.Component {
  handleSubmit = values => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
      <div className="eventPage">
        <EventForm 
          onSubmit={this.handleSubmit}/>
        <EventOverview />
        <GuestForm />
      </div>
    )
  }
}
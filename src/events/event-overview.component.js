import React from 'react';

import EventInfo from './event-details.component';
import GuestList from './guestlist-view.component';

export default class EventOverview extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      event: [{
          eventName: 'Test Details',
          date: '1/30/18',
          startTime: '3PM',
          endTime: '8PM',
          locationName: 'Hipster Oak Tree',
          locationAddress: '555 Becool St',
          locationLink: 'wwww.hipsteroaktree.com'
        }
      ]
    }
  }

  render() {
    // chnage to this.props later
    const eventDetails = this.state.event.map((event, index) => 
      <div className="event" key={index}>
        <EventInfo {...event} />
      </div>
    );

    return (
      <section className="event-overview">
        <h3> {this.state.event.eventName} </h3>
        {eventDetails}
        <GuestList />
      </section>
    )
  }
}

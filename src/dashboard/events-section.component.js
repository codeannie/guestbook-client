// this will hold upcoming events & past event cards 
// how to use this separetly for upcoming and past? 

import React from 'react';
import EventCard from './event-card.component';

export default class EventSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{
          eventName: 'Test Event',
          eventDate: '2/1/18',
          eventStartTime: '1PM',
          eventEndTime: '4PM',
          eventLocationName: 'Somewhere over the rainbow',
          guestNumber: 10
        }, {
          eventName: 'Test Event 2',
          eventDate: '2/1/18',
          eventStartTime: '1PM',
          eventEndTime: '4PM',
          eventLocationName: 'Fancy House',
          guestNumber: 20
        }
      ]
    }
  }

  render() {
    // chnage to this.props later
    const eventCards = this.state.events.map((event, index) => 
      <div className="event" key={index}>
        <EventCard {...event} />
      </div>
    );

    return (
      <section className="events-section">
        <h3> {this.props.title} </h3>
          {eventCards}
      </section> 
    )
  }
}
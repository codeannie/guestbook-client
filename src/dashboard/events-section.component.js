// this will hold upcoming events & past event cards 
// how to use this separetly for upcoming and past? 

import React from 'react';
import EventCard from './event-card.component';

export default class EventSection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const eventCards = this.props.events.map((event, index) => 
      <div className="event" key={index}>
        <Event Card {...event} />
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
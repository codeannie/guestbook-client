// this will hold upcoming events & past event cards 
// how to use this separetly for upcoming and past? 

import React from 'react';
import EventCard from './event-card.component';

export default class EventSection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {
    // const eventCards  -- mapping? 
    // props.events.map = transform event to eventCard component
    return (
      <div className="events-section">
        <h3> {props.title} </h3>
        {/* put the constant of the mapped array here `*/}
      </div> 
    )
  }
}
// this will hold upcoming events & past event cards 
// how to use this separetly for upcoming and past? 

import React from 'react';
import EventCard from './event-card.component';

export default class eventSection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {
    // const eventCards  -- mapping? 
    return (
      <div className="events-section">
        <Event Card />
      </div> 
    )
  }
}
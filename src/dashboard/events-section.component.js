import React from 'react';
import EventCard from './event-card.container';


export default class EventSection extends React.Component {
  render() {
    // const { events } = this.props;
    // how to add key? 
    const eventByStatus = this.props.events.reduce(
      (results, event) => {
        const eventComponent = (
          <EventCard
            eventName={event.eventName}
            date={event.date}
            startTime={event.startTime}
            endTIme={event.endTime}
            locationName={event.locationName}
            numOfGuests={event.numOfGuests}
            eventStatus={event.eventStatus}
          />
        );
        if (event.eventStatus === 1) {
          // console.log('upcoming results? ->', results.upcoming);
          results.upcoming.push(eventComponent);
          return results;
        } else if (event.eventStatus === 2) {
          results.past.push(eventComponent);
          return results;
        } else 
          results.archive.push(eventComponent);
          return results;
        },
      { 
        upcoming: [],
        past: [],
        archive: []
      }
  );
    // 
    // console.log('upcoming events? ->', eventByStatus.upcoming);

    return (
      <section className="events-section">
        <div className="upcoming-container">
          <h3> Upcoming Events </h3>
            {eventByStatus.upcoming}
        </div>
        <div className="past-container">
          <h3> Past Event </h3>
            {eventByStatus.past}
        </div>
      </section> 
    )
  }
}


// events: [{
//   eventName: 'Test Event',
//   eventDate: '2/1/18',
//   eventStartTime: '1PM',
//   eventEndTime: '4PM',
//   eventLocationName: 'Somewhere over the rainbow',
//   guestNumber: 10
// }, {
//   eventName: 'Test Event 2',
//   eventDate: '2/1/18',
//   eventStartTime: '1PM',
//   eventEndTime: '4PM',
//   eventLocationName: 'Fancy House',
//   guestNumber: 20
// }
// ]


    // chnage to this.props later
    // const eventCards = this.state.events.map((event, index) => 
    //   <div className="event" key={index}>
    //     <EventCard {...event} />
    //   </div>
    // );

    // return (
    //   <section className="events-section">
    //     <h4> Upcoming Events </h4>
    //     <h3> {this.props.title} </h3>
    //       {eventCards}
    //     <h4> Past Event </h4>

    //   </section> 
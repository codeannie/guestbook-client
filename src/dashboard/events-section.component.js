import React from 'react';
import EventCard from './event-card.component';


export default class EventSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{
          eventName: 'Test Event',
          date: '2/1/18',
          startTime: '1PM',
          endTime: '4PM',
          locationName: 'Somewhere over the rainbow',
          numOfGuests: 10,
          eventStatus: 1
        }, {
          eventName: 'Test Event 2',
          date: '2/4/18',
          startTime: '1PM',
          endTime: '4PM',
          locationName: 'Somewhere with hipster backyard',
          numOfGuests: 40,
          eventStatus: 1
        }, {
          eventName: 'Test Event 3',
          date: '2/4/18',
          startTime: '1PM',
          endTime: '2PM',
          locationName: 'hilton conference room',
          numOfGuests: 40,
          eventStatus: 2
        }
      ]
    }
  }

  render() {
    // const { events } = this.props;
    const eventByStatus = this.state.events.reduce(
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
          console.log('upcoming results? ->', results.upcoming);
          results.upcoming.push(eventComponent);
          return results;
        } 
        results.past.push(eventComponent);
        return results;
        },
      { 
        upcoming: [],
        past: []
      }
  );
    // 
    console.log('upcoming events? ->', eventByStatus.upcoming);

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
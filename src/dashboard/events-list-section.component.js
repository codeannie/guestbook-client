import React from "react";
import { css } from 'aphrodite';
import { isFuture } from 'date-fns';
import styles from './dashboard.styles';
import sharedStyles from '../_shared/styles/shared.styles';
import EventCard from "./event-card.container";

export default class EventSection extends React.Component {
  render() {
    const eventByStatus = this.props.events.reduce(
      (results, event, index) => {
        const eventComponent = (
          <EventCard
            key={index}
            eventId={event.id} 
            eventName={event.eventName}
            date={event.date}
            startTime={event.startTime}
            endTIme={event.endTime}
            locationName={event.locationName}
            numOfGuests={event.numOfGuests}
            eventStatus={event.eventStatus}
          />
        );
        if(isFuture(event.date)) {
          results.upcoming.push(eventComponent);
          return results;
        } else {
          results.past.push(eventComponent);
          return results;
        }
        // if (event.eventStatus === 1) {
        //   results.upcoming.push(eventComponent);
        //   return results;
        // } else if (event.eventStatus === 2) {
        //   results.past.push(eventComponent);
        //   return results;
        // } else results.archive.push(eventComponent);
        // return results;
      },
      {
        upcoming: [],
        past: [],
        archive: []
      }
    );

    return (
      <section>
        <h2 className={css(sharedStyles.headerFont, styles.sectionHeader)}> - Upcoming Events - </h2>
          <div className={css(styles.flexContainer)}>
            {eventByStatus.upcoming}
          </div>
        <h2 className={css(sharedStyles.headerFont, styles.sectionHeader)}> - Past Events - </h2>
          <div className={css(styles.flexContainer)}>
            {eventByStatus.past}
          </div>
      </section>
    );
  }
}

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

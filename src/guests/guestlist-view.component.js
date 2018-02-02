import React from 'react';
import { css } from 'aphrodite'; 
import styles from '../events/event.styles';

export default class GuestList extends React.Component {
  
  componentWillMount() {
    const { event } = this.props;
    this.props.getEventGuests(event.id);
  }
  
  render() {
    const { guests } = this.props;
    
    const guestListItems = guests.map((guest, index) => {
      return <li key={index}>
        <strong>{guest.fullName}</strong> - <span>{guest.email}</span>
      </li>;
    })

    return (
      <section className={css(styles.guestList)} eventId={this.props.event.id}>
        {/* <h3> Guest List </h3> */}
          <ol>
            {guestListItems}
          </ol>
      </section>
    )
  }
}

// render() {
// const guestResponses = new Map();
//       // no response
//       guestResponses.set(0, []);
//       // attending
//       guestResponses.set(1, []);
//       // not attending
//       guestResponses.set(2, []);
//       // tentative
//       guestResponses.set(3, []);

//     const guestByStatus = this.props.guests.forEach((guest, index) => {
//       //map, get array that corresponds to rsvp status & push to array
//       guestResponses.get(guest.rsvpStatus).push(
//         <li className="guestInfo" key={index}> 
//           {guest.fullName}
//         </li>
//       )
//     })

//     return (
//       <section className={css(styles.guestList)} eventId={this.props.event.id}>
//         <h2> Guest List </h2>
//         {/* <h3> Responses </h3> */}
//           <h4> Attending </h4>
//             <GuestResponse guestByStatus={guestResponses.get(1)} />
//           <h4> Not Attending </h4>
//             <GuestResponse guestByStatus={guestResponses.get(2)} />
//           <h4> Tentative </h4>
//             <GuestResponse guestByStatus={guestResponses.get(3)} />
//           <h4> Not Responded </h4>
//             <GuestResponse guestByStatus={guestResponses.get(0)} />

//       </section>


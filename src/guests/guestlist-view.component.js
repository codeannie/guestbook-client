import React from 'react';
import GuestResponse from './guest.component';

export default class GuestList extends React.Component {
  render() {
    const guestResponses = new Map();
      // no response
      guestResponses.set(0, []);
      // attending
      guestResponses.set(1, []);
      // not attending
      guestResponses.set(2, []);
      // tentative
      guestResponses.set(3, []);
    // console.log('props? ->', this.props.guests);
    // console.log('guest props? ->', this.props.guests);
    const guestByStatus = this.props.guests.forEach((guest, index) => {
      //map, get array that correspondes to rsvp status & push to array
      guestResponses.get(guest.rsvpStatus).push(
        //guest.id should be _id from db
        <li className="guestInfo" key={index}> {guest.name}, {guest.email} </li>
      )
    })

    return (
      <section className="guestlist">
        <h2> Guest List </h2>
        <h3> Responses </h3>
          <h4> Attending </h4>
            <GuestResponse guestByStatus={guestResponses.get(1)} />
          <h4> Not Attending </h4>
            <GuestResponse guestByStatus={guestResponses.get(2)} />
          <h4> Tentative </h4>
            <GuestResponse guestByStatus={guestResponses.get(3)} />
          <h4> Not Responded </h4>
            <GuestResponse guestByStatus={guestResponses.get(0)} />

      </section>
    )
  }
}


import React from 'react';
import GuestResponse from './guestlist-responses.component';
export default class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [
        {
          name: "Joe Bruin No Response",
          email: "joebruin@ucla.edu",
          rsvpStatus: 0
        }, {
          name: "Tommy Trojan",
          email: "tommytrojan@usc.edu",
          rsvpStatus: 1
        }, {
          name: "Code Bear",
          email: "iamcodebear@awesome.com",
          rsvpStatus: 1
        }, {
          name: "Joe Bruin",
          email: "joebruin@ucla.edu",
          rsvpStatus: 2
        }, {
          name: "Tommy Trojan",
          email: "tommytrojan@usc.edu",
          rsvpStatus: 2
        }, {
          name: "Code Bear",
          email: "iamcodebear@awesome.com",
          rsvpStatus: 3
          //plus one?
        }
      ]
    }
  }

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
    const guestByStatus = this.state.guests.forEach(guest => {
      //map, get array that correspondes to rsvp status & push to array
      guestResponses.get(guest.rsvpStatus).push(
        //guest.id should be _id from db
        <li className="guestInfo" key={guest.id}> {guest.name}, {guest.email} </li>
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


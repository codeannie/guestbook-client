import React from 'react';
import GuestResponse from './guestlist-responses.component';
export default class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [
        {
          name: "Joe Bruin",
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
    const guestByStatus = this.state.guests.reduce(
      (results, guest) => {
        const guestComponent = (
          <GuestResponse
            name={guest.name}
            email={guest.email}
            rsvpStatus={guest.rsvpStatus}
          />
        );
        if (guest.rsvpStatus === 1) {
          results.attending.push(guestComponent);
          return results;
        } else if (guest.rsvpStatus === 2) {
          results.notAttending.push(guestComponent);
          return results;
        } else if (guest.rsvpStatus === 3) {
          results.tenatative.push(guestComponent)
          return results; 
        } 
          results.noResponse.push(guestComponent);
          return results;
        },
        { 
          attending: [],
          notAttending: [],
          tenatative: [],
          noResponse: []
          }
        );

    return (
      <section className="guestlist">
        <h2> Guest List </h2>
        <h3> Responses </h3>
          <h4> Attending </h4>
            {guestByStatus.attending}
          <h4> Not Attending </h4>
            {guestByStatus.notAttending}
          <h4> Tentative </h4>
            {guestByStatus.tenatative}
          <h4> Not Responded </h4>
            {guestByStatus.noResponse}
      </section>
    )
  }
}


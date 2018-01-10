import React from 'react';
import GuestResponse from './guestlist-responses.component';
export default class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
// loop through and filter by guest status
  render() {
    return (
      <div className="guestlist">
        <h3> Responses </h3>
        <h4> Attending </h4>
          <GuestResponse />
        <h4> Not Attending </h4>
          <GuestResponse />
        <h4> Tentative </h4>
          <GuestResponse />
        <h4> Not Responded </h4>
          <GuestResponse />
      </div>
    )
  }
}

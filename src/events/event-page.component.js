import React from 'react';
import EventForm from '../events/event-form.component';
import EventOverview from '../events/event-overview.container';
import GuestForm from '../guests/guestlist-form.component';
import GuestList from '../guests/guestlist-view.component';
import * as routerPath from '../_shared/store/router/authenticated.routes';
import { EVENT_EDIT_ROUTE } from '../_shared/store/router/authenticated.routes';
export default class EventPage extends React.Component {
  submit = values => {
    console.log('event form submission', values);
  }

  getComponentByRoute(){
    switch(this.props.route) {
      case routerPath.EVENT_OVERVIEW_ROUTE:
        return <EventOverview event={this.props.event}/>;
      case routerPath.EVENT_EDIT_ROUTE:
        return <EventForm />;
      case routerPath.EVENT_NEW_ROUTE:
        return <EventForm />; 
      case routerPath.GUESTLIST_NEW_ROUTE:
        return <GuestForm />; 
      case routerPath.EVENT_OVERVIEW_ROUTE:
      default:
        return <EventOverview />;
    }
  }
  render() {
    return (
      <div className="eventPage">
        {this.getComponentByRoute()}
      </div>
    )
  }
}

{/* <EventOverview /> */}
{/* <EventForm onSubmit={this.submit}/> */}
{/* <GuestForm /> */}
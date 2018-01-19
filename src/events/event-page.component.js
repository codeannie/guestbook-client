import React from 'react';
// HEADER
import Header from '../_shared/navigation/header-image.component';
import NavBarDrawer from '../_shared/navigation/nav-bar-drawer.component';
// COMPONENTS
import EventForm from '../events/event-form.component';
import EventOverview from '../events/event-overview.container';
import GuestForm from '../guests/guestlist-form.component';
import GuestList from '../guests/guestlist-view.component';
// ROUTES
import * as routerPath from '../_shared/store/router/authenticated.routes';
export default class EventPage extends React.Component {

  getComponentByRoute() {
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
      <div className="main-container">
        <Header />
        <NavBarDrawer />
        <div className="eventPage-container">
          {this.getComponentByRoute()}
        </div>
      </div>
    )
  }
}

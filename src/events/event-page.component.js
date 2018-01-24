import React from 'react';
import { css } from 'aphrodite';
// HEADER
import Header from '../_shared/navigation/header-image.component';
import NavBarDrawer from '../_shared/navigation/nav-bar-drawer.container';
// COMPONENTS
import EventForm from '../events/event-form.container';
import EventOverview from '../events/event-overview.container';
import GuestForm from '../guests/guests-form.container';
import GuestList from '../guests/guestlist-view.component';
// ROUTES
import * as routerPath from '../_shared/store/router/authenticated.routes';
// STYLES
import sharedStyles from '../_shared/styles/shared.styles';

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
        return <EventOverview />; //if there is not event to show, what shoudl be the default?
    }
  }
  render() {
    return (
      <div className="main-container">
        <Header />
        <NavBarDrawer />
        <div className={css(sharedStyles.mainContainer)}>
          {this.getComponentByRoute()}
        </div>
      </div>
    )
  }
}

import React from 'react';
import { css } from 'aphrodite';
// HEADER
// import Header from '../_shared/navigation/header-image.component';
import NavBarDrawer from '../_shared/navigation/nav-bar-drawer.container';
// COMPONENTS
import EventForm from './event-form.container';
import EditEventForm from './event-edit-form.container';
import EventOverview from './event-overview.container';
import GuestForm from '../guests/guests-form.container';
// ROUTES
import * as routerPath from '../_shared/store/router/authenticated.routes';
// STYLES
import styles from './event.styles';
import sharedStyles from '../_shared/styles/shared.styles';

export default class EventPage extends React.Component {

  getComponentByRoute() {
    switch(this.props.route) {
      case routerPath.EVENT_OVERVIEW_ROUTE:
        return <EventOverview event={this.props.event} />;
      case routerPath.EVENT_EDIT_ROUTE:
        return <EditEventForm />;
      case routerPath.EVENT_NEW_ROUTE:
        return <EventForm />; 
      case routerPath.GUESTLIST_EDIT_ROUTE:
        return <GuestForm />; 
      case routerPath.GUESTLIST_NEW_ROUTE:
        return <GuestForm />; 
      default:
        return <EventOverview event={this.props.event} />; 
    }
  }
  render() {
    return (
      <div className={css()}>
        {/* <Header /> */}
        <NavBarDrawer />
        <div className={css(sharedStyles.mainContainer, styles.backgroundContainer)}>
          {this.getComponentByRoute()}
        </div>
      </div>
    )
  }
}

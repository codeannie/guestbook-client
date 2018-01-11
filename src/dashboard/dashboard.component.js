// this will hold teh dashboard content...? 
// or does this go into App.js and use routing? 
import React from 'react';
import AppNav from '../_shared/navigation/app-nav.component';
import NavBarDrawer from '../_shared/navigation/nav-bar-drawer.component';
import Welcome from './welcome.component';
import EventSection from './events-section.component';
import EventForm from '../events/event-form.component';
import EventOverview from '../events/event-overview.component';
import GuestForm from '../guests/guestList-form.component';
export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <NavBarDrawer />
        <Welcome />
        <EventSection />
        <EventForm />
        <EventOverview />
        <GuestForm />
      </div>
    )
  }
}
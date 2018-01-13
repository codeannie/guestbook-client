import React from 'react';
import Header from '../_shared/navigation/header-image.component';
import NavBarDrawer from '../_shared/navigation/nav-bar-drawer.component';
import Welcome from './welcome.component';
import EventSection from './events-section.component';
import EventPage from '../events/event-page.component';
export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <NavBarDrawer />
        <div className="dashboard-container">
          <Welcome />
          <EventSection />
          <EventPage />
        </div>
      </div>
    )
  }
}
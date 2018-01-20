import React from 'react';
import Header from '../_shared/navigation/header-image.component';
import NavBarDrawer from '../_shared/navigation/nav-bar-drawer.container';
import Welcome from './welcome.component';
import EventSection from './events-list-section.component';
import EventPage from '../events/event-page.component';

// this can be stateless component since not referencing local state anymore
export default class Dashboard extends React.Component {
  render() {
    // ok to connect parent componanet to redux store/container
    // then pass as props to child component 
    const events = this.props.events;

    return (
      <div className="main-container">
        <Header />
        <NavBarDrawer />
        <div className="dashboard-container">
          <Welcome />
          {/* child prop expects "events" */}
          <EventSection events={events} />
        </div>
      </div>
    )
  }
}
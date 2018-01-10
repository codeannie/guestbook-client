// this will hold teh dashboard content...? 
// or does this go into App.js and use routing? 
import React from 'react';
import AppBar from '../_shared/navigation/app-nav.component';
import Welcome from './welcome.component';
import EventSection from './events-section.component';
import EventForm from '../events/event-form.component';
import EventOverview from '../events/event-overview.component';
export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        {/* <AppBar /> */}
        <Welcome />
        <EventSection />
        <EventForm />
        <EventOverview />
      </div>
    )
  }
}
import React from 'react';
import { css } from 'aphrodite';
import sharedStyles from '../_shared/styles/shared.styles';
import styles from './dashboard.styles';
import Header from '../_shared/navigation/header-image.component';
import NavBarDrawer from '../_shared/navigation/nav-bar-drawer.container';
// import Welcome from './welcome.component';
import EventSection from './events-list-section.component';
import EventPage from '../events/event-page.component';

// get first name from state
const WelcomeBlurb = (props) => {
  return (
    <div className="welcomeBlurb">
      <h2> Welcome, {props.firstName} </h2>
    </div> 
  )
}
export default class Dashboard extends React.Component {
  // componentDidMount() {
  //   this.props.onLoadDashboard()
  // }
  
  render() {
    // ok to connect parent componanet to redux store/container
    // then pass as props to child component 
    const events = this.props.events;
    const firstName = this.props.firstName;

    return (
      <div>
        <Header />
        <NavBarDrawer />
        <div className={css(sharedStyles.mainContainer, styles.container)}>
          <WelcomeBlurb firstName={firstName} />
          {/* child prop expects "events" */}
          <EventSection events={events} />
        </div>
      </div>
    )
  }
}
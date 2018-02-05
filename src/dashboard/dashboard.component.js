import React from 'react';
import { css } from 'aphrodite';
import LoadingStatus from '../_shared/navigation/loading.component';
import sharedStyles from '../_shared/styles/shared.styles';
import styles from './dashboard.styles';
import NavBarDrawer from '../_shared/navigation/nav-bar-drawer.container';
import EventSection from './events-list-section.component';
import Footer from '../_shared/navigation/footer.component';


const WelcomeBlurb = (props) => {
  return (
    <div className="welcomeBlurb">
      <h2 className={css(styles.welcome)}> Welcome, {props.firstName} </h2>
    </div> 
  )
}
export default class Dashboard extends React.Component {

  componentDidMount() {
    this.props.onLoadDashboard();
    // this.fetchEvents();
  }

  fetchEvents = () => {
    this.props.getActiveEvents();
    this.props.getPastEvents();
  }
  
  render() {
    const events = this.props.events;
    const firstName = this.props.firstName;
    // display loading if fetching = true
    // if (this.props.fetching) {
    //   // return <h1> LOADING... </h1>
    //   return <div className={css(styles.loadingContainer)}> <LoadingStatus /> </div>
    // }

    return this.props.fetching ? (
      <div className={css(styles.loadingContainer)}> <LoadingStatus /> </div>
      ) : (
      <div>
        <NavBarDrawer />
        <div className={css(sharedStyles.mainContainer, styles.backgroundContainer)}>
          <WelcomeBlurb firstName={firstName} />
          <EventSection events={events} />
        </div>
        <Footer />
      </div>
    )
  }
}


// !events.length  ? (
//   <div>
//     <Header />
//     <NavBarDrawer />
//     <div className={css(sharedStyles.mainContainer, styles.container)}>
//       <WelcomeBlurb firstName={firstName} />
//       <EventForm /> 
//     </div>
//     <Footer />
//   </div>
//   ) : (
//   <div>
//     <Header />
//     <NavBarDrawer />
//     <div className={css(sharedStyles.mainContainer, styles.container)}>
//       <WelcomeBlurb firstName={firstName} />
//       {/* child prop expects "events" */}
//       <EventSection events={events} />
//     </div>
//     <Footer />
//   </div>
// )
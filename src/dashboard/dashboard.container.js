import { connect } from 'react-redux';
import Dashboard from './dashboard.component';
// import actions
import { createGetAllEventsAction } from '../events/store/events.actions';

const mapStateToProps = state => {
  console.log(state);
  return {
    // at login, should give you current user 
    currentUser: state._sharedReducer.session.currentUser,
    events: state.eventsReducer.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getEvents(userId) {
    //   dispatch(createGetAllEventsAction(userId));
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

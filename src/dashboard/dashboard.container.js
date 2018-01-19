import { connect } from 'react-redux';
import { push } from 'redux-little-router';
import Dashboard from './dashboard.component';
// import actions
import { createGetAllEventsAction } from '../events/store/events.actions';
import { createLogOutAction } from '../_shared/store/session/session.actions';

const mapStateToProps = state => {
  return {
    // at login, should give you current user 
    currentUser: state._sharedReducer.session.currentUser,
    events: state.eventsReducer.events
  };
};

const mapDispatchToProps = dispatch => {
  // const userId = state._sharedReducer.session.currentUser.user.id; //?
  return {
  //   onLogOut() {
  //     if (!state._sharedReducer.session.currentUserUser) {
  //       dispatch(createLogOutAction());
  //       dispatch(push('/'));
  //     }
      onLoadDashboard() {
        dispatch(createGetAllEventsAction());
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

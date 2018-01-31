import { connect } from "react-redux";
import { push } from "redux-little-router";
import Cookies from "js-cookie";
import Dashboard from "./dashboard.component";
// import actions
import {
  createGetAllEventsAction,
  createGetActiveEventsAction,
  createGetPastEventsAction
} from "../events/store/events.actions";

const mapStateToProps = state => {
  // store user info in props
  let currentUser;
  if (state._sharedReducer.session.currentUser) {
    currentUser = state._sharedReducer.session.currentUser;
  }
  return {
    currentUser,
    // firstName: currentUser.user.firstName,
    firstName: Cookies.get("loggedInUserFirstName"),
    events: state.eventsReducer.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadDashboard: () => {
      // dispatch(createGetActiveEventsAction(), 
      // createGetPastEventsAction())
    dispatch(createGetAllEventsAction())
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
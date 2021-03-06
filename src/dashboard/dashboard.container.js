import { connect } from "react-redux";
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
    firstName: Cookies.get("loggedInUserFirstName"),
    events: state.eventsReducer.events,
    fetching: state.eventsReducer.fetching, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadDashboard: () => {
      dispatch(createGetAllEventsAction())
    },
    getActiveEvents: () => {
      dispatch(createGetActiveEventsAction())
    },
    getPastEvents: () => {
      dispatch(createGetPastEventsAction())
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
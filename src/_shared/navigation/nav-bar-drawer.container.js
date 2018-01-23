import { connect } from "react-redux";
import { push } from "redux-little-router";
import Cookies from 'js-cookie';
import NavBarDrawer from "./nav-bar-drawer.component";
// import actions
import { createLogOutAction } from "../store/session/session.actions";

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
    onLogOut: () => {
      dispatch(createLogOutAction());
      Cookies.remove('jwt');
      Cookies.remove('loggedInUserId');
      dispatch(push("/"));
    },
    openDashboard: () => {
      dispatch(push("/dashboard"));
    },
    openEventForm: () => {
      dispatch(push("/event/new"));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarDrawer);

import { connect } from "react-redux";
import { push } from "redux-little-router";
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
      dispatch(push("/"));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarDrawer);

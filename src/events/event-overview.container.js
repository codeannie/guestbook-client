import { connect } from "react-redux";
import EventOverview from "./event-overview.component";
import { createGetAllEventsAction } from "./store/events.actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    events: state.eventsReducer.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents(userId) {
      dispatch(createGetAllEventsAction(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventOverview);
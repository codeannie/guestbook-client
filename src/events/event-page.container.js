import { connect } from "react-redux";
import EventPage from "./event-page.component";
// import action

const mapStateToProps = state => {
  // get all events from reducer
  const events = state.eventsReducer.events;
  // get param from router - event card container 
  const paramId = state.router.params.eventId;
  // find specific event
  const event = events.find(e => {
    return e.id === Number(paramId)
  })
  
  return {
    // return single event
    event,
    route: state.router.route
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getEvents(userId) {
    //   dispatch(createGetAllEventsAction(userId));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);

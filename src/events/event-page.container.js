import { connect } from "react-redux";
import EventPage from "./event-page.component";

const mapStateToProps = state => {
  const events = state.eventsReducer.events;
  const paramId = state.router.params.eventId;
  const event = events.find(e => {
    return e.id === paramId;
  })
  return {
    // return single event
    event,
    eventId: state.router.params.eventId,
    route: state.router.route
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getEvents(userId) {
    //   dispatch(createGetAllEventsAction(userId));
    // }
    // onEditClick(eventId) {
    //   dispatch(push({
    //     route: EVENT_EDIT_ROUTE,
    //     params: {
    //       eventId
    //     }
    //   }));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);

import { connect } from "react-redux";
import { push } from '../_shared/store/router/utils';
import EventPage from "./event-page.component";
import { EVENT_EDIT_ROUTE } from '../_shared/store/router/authenticated.routes';

const mapStateToProps = state => {
  // get all events from reducer
  const events = state.eventsReducer.events;
  // get param from router - event card container 
  const paramId = state.router.params.eventId;
  console.log('event page container - paramId ->', paramId);
  // find specific event
  const event = events.find(e => {
    return e.id === paramId;
  })
  console.log('event page container event->', event);
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

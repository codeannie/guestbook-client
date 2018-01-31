import { connect } from "react-redux";
import { push } from '../_shared/store/router/utils';
import EventOverview from "./event-overview.component";
import { createGetAllEventsAction } from "./store/events.actions";
import { DASHBOARD_ROUTE, EVENT_EDIT_ROUTE } from '../_shared/store/router/authenticated.routes';

const mapStateToProps = state => {
  // is this redundant? it's already on event page container 
  // get all events from reducer
  const events = state.eventsReducer.events;
  // get param from router - event card container 
  const paramId = state.router.params.eventId;
  console.log('event overview paramId ->', paramId);
  // find specific event
  const event = events.find(e => {
    return e.id === paramId;
  })
  console.log('event overview event ->', event);
  return {
    // return single event
    event,
    eventId: state.router.params.eventId,
    route: state.router.route
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => {
      dispatch(createGetAllEventsAction());
    },
    onEditClick(eventId) {
      dispatch(push({
        route: EVENT_EDIT_ROUTE,
        params: {
          eventId
        }
      }));
    },
    closeForm: () => {
      dispatch(push({
        route: DASHBOARD_ROUTE
      }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventOverview);

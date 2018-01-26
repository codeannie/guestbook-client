import { connect } from "react-redux";
import { push } from '../_shared/store/router/utils';
import EventOverview from "./event-overview.component";
import { createGetAllEventsAction } from "./store/events.actions";
import { EVENT_EDIT_ROUTE } from '../_shared/store/router/authenticated.routes';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => {
      dispatch(createGetAllEventsAction());
    },

    onEditClick: (eventId) => {
      dispatch(push({
        route: EVENT_EDIT_ROUTE,
        params: {
          eventId
        }
      }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventOverview);

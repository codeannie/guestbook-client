import { connect } from 'react-redux';
import { push } from '../_shared/store/router/utils';
import EventCard from './event-card.component';
import { EVENT_OVERVIEW_ROUTE } from '../_shared/store/router/authenticated.routes';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onViewClick(eventId) {
        dispatch(push({
          route: EVENT_OVERVIEW_ROUTE,
          params: {
            eventId
          }
        }));
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);

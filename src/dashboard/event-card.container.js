import { connect } from 'react-redux';
import { push } from 'redux-little-router';
import EventCard from './event-card.component';
import { EVENT_OVERVIEW_ROUTE } from '../_shared/store/router/authenticated.routes';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onViewClick() {
        dispatch(push({
          route: EVENT_OVERVIEW_ROUTE,
          params: {
            eventId: 1 // for now
          }  
        }));
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);

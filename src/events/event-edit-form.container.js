import { connect } from 'react-redux';
import { push } from '../_shared/store/router/utils';
import EditEventForm from './event-edit-form.component';
import { createModifyEventAction } from './store/events.actions';
import { modifyEvent } from './services/events.service';
import { EVENT_OVERVIEW_ROUTE, GUESTLIST_EDIT_ROUTE } from '../_shared/store/router/authenticated.routes';

const mapStateToProps = state => {  
  return {
  // challenge - grab correct event to edit :) :)     
    name: state.eventsReducer.events[0].name, 
    eventId: state.router.params.eventId,
    route: state.router.route
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModifyEvent(event){
      modifyEvent(event)
      .then(res => {
        dispatch(createModifyEventAction(res.data));
        dispatch(push({
          route: EVENT_OVERVIEW_ROUTE
        }));
      })
    },
    onModifyGuestList:() => {
      dispatch(push({
        route: GUESTLIST_EDIT_ROUTE
      }))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);
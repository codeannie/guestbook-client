import { connect } from 'react-redux';
import { push } from '../_shared/store/router/utils';
import EditEventForm from './event-edit-form.component';
import { createModifyEventAction } from './store/events.actions';
import { modifyEvent } from './services/events.service';
import { EVENT_OVERVIEW_ROUTE, GUESTLIST_EDIT_ROUTE } from '../_shared/store/router/authenticated.routes';

const mapStateToProps = (state) => {  
  const events = state.eventsReducer.events;
  const paramId = state.router.params.eventId;
  const event = events.find(e => {
    return e.id === paramId;
  })
  
  return {
    event,
    eventName: event.name,
    date: event.date, 
    startTime: event.startTime,
    endTime: event.endTime,
    description: event.description,
    locationName: event.locationName,
    locationAddress: event.locationAddress,
    locationLink: event.locationLink,
    locationMap: event.locationMap,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitUpdatedEvent(event){
      modifyEvent(event)
      .then(res => {
        dispatch(createModifyEventAction(res.data));
        dispatch(push({
          route: EVENT_OVERVIEW_ROUTE
        }));
      })
    },
    // onModifyGuestList:() => {
    //   dispatch(push({
    //     route: GUESTLIST_EDIT_ROUTE
    //   }))
    // },
    closeForm: () => {
      dispatch(push({
        route: EVENT_OVERVIEW_ROUTE
        // need params? 
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);
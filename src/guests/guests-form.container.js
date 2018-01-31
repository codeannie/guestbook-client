import { connect } from 'react-redux';
import { push } from '../_shared/store/router/utils';
import GuestForm from './guests-form.component';
import { getEventGuests, addGuest, deleteGuest } from './services/guests.service';
import { 
  createGetAllGuestsAction, 
  createAddGuestAction, 
  createDeleteGuestAction 
} from './store/guests.actions';
import { DASHBOARD_ROUTE } from '../_shared/store/router/authenticated.routes';

const mapStateToProps = state => {
  const events = state.eventsReducer.events;
  const paramId = state.router.params.eventId;
  const event = events.find(e => {
    return e.id === paramId;
  });
  
  const guests = state.guestsReducer.guests;
  return {
    event,
    guests,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventGuests(eventId){
      return getEventGuests(eventId).then((res) => {
        dispatch(createGetAllGuestsAction(res.data.guests))
      });
    },
    saveGuest(eventId, guestInfo){
      return addGuest(eventId, guestInfo).then((res) => {
        dispatch(createAddGuestAction(res.data));
      });
    },
    removeGuest(eventId, guestId){
      return deleteGuest(eventId, guestId).then(() => {
        dispatch(createDeleteGuestAction(guestId)); 
      })
    },
    closeForm: () => {
      dispatch(push({
        route: DASHBOARD_ROUTE
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestForm);

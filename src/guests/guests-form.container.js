import { connect } from 'react-redux';
import GuestForm from './guests-form.component';
import { getEventGuests, addGuest } from './services/guests.service';
import { createGetAllGuestsAction, createAddGuestAction } from './store/guests.actions';
// import action

const mapStateToProps = state => {
  const events = state.eventsReducer.events;
  const paramId = state.router.params.eventId;
  const event = events.find(e => {
    return e.id === paramId;
  })
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
      // call api to remove guest and then dispatch to remove from state
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestForm);

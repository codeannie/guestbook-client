import { connect } from 'react-redux';
import GuestList from './guestlist-view.component';
import { getEventGuests } from './services/guests.service';
import { createGetAllGuestsAction } from './store/guests.actions';

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);

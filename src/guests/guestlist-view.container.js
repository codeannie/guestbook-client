import { connect } from 'react-redux';
import GuestList from './guestlist-view.component';
import { createGetAllGuestsAction} from './store/guests.actions';

const mapStateToProps = state => {
  return {
    guests: state.guestsReducer.guests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getGuests(eventId) {
    //   dispatch(createGetAllGuestsAction(eventId));
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);

import { connect } from 'react-redux';
import { push } from '../_shared/store/router/utils';

import EventForm from './event-form.component';
import { createNewEventAction } from './store/events.actions';
import { createEvent, modifyEvent } from './services/events.service';

const mapStateToProps = state => {
  let currentUser; 
  if (state._sharedReducer.session.currentUser) {
    currentUser = state._sharedReducer.session.currentUser; 
  }
  return {
    currentUser,
    events: state.eventsReducer.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitNewEvent(newEvent, currentUser){
      createEvent(newEvent, currentUser)
      .then(res => {
        dispatch(createNewEventAction(res.data));
        dispatch(push('/guestlist'));
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

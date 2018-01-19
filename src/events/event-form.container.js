import { connect } from 'react-redux';
import { push } from '../_shared/store/router/utils';

import EventForm from './event-form.component';
import { createNewEventAction } from './store/events.actions';

const mapStateToProps = state => {
  console.log(state);
  return {
    // make sure this is the event that is being created
    // userId: state._sharedReducer.session.currentUser.user.id //?
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewEvent(newEvent){
      dispatch(createNewEventAction(newEvent));
      dispatch(push('/guestlist'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

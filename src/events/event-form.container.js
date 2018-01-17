import { connect } from 'react-redux';
import EventForm from './event-form.component';
// import action

const mapStateToProps = state => {
  console.log(state);
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    //getlogin
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

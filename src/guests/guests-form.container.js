import { connect } from 'react-redux';
import GuestForm from './guests-form.component';
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

export default connect(mapStateToProps, mapDispatchToProps)(GuestForm);

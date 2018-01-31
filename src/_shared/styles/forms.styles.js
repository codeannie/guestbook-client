import { StyleSheet } from 'aphrodite';

const screenSize = {
  desktop: '@media (min-width: 700px)',
};

const formStyles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    width: '95%', 
    // media query - add widthwith large screen
    // alignContent: 'center',
    margin: '0 auto',
    padding: 18,
    border: '3px inset #FF8F00',
    borderRadius: 5,
    [screenSize.desktop]:{
      width: '50%', 
    },
  },
  eventGuestContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%', // media query - add width with large screen
    margin: '0 auto',
    padding: 18,
    border: '3px inset #0277BD',
    borderRadius: 5
  },
  guestListContainer: {
    display: 'flex',
    width: '75%', // media query - add width with large screen
    margin: '0 auto',
    padding: 18,
    border: '3px inset #0277BD',
    borderRadius: 5
  },
  guestFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '0 auto',
    padding: 18,
  },
  input: {
    display: 'block',
    width: 'auto',
    marginBottom: 5
  },
  // how to get it into a row? 
  dateTimeInput: {
    display: 'inline-block',
    width: 'auto',
    marginBottom: 10,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    // display: 'inline-block', 
    // margin: '0 auto',
    // alignSelf: 'center',
    // width: '25%',
  }
});

export default formStyles;
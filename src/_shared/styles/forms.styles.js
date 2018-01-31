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
  eventFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%', 
    margin: '0 auto',
    padding: 18,
    border: '3px inset #0277BD',
    borderRadius: 5,
    [screenSize.desktop]:{
      width: '75%', 
    },
  },
  guestListContainer: {
    display: 'flex',
    width: '95%', // media query - add width with large screen
    margin: '0 auto',
    padding: 18,
    border: '3px inset #0277BD',
    borderRadius: 5,
    [screenSize.desktop]:{
      width: '75%', 
    },
  },
  guestFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    margin: '0 auto',
    padding: 18,
    [screenSize.desktop]:{
      width: '80%', 
    },
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
    flexWrap: 'wrap',
    [screenSize.desktop]:{
      flexWrap: 'none', 
    },
  },
  button: {
    // display: 'inline-block', 
    // margin: '0 auto',
    // alignSelf: 'center',
    // width: '25%',
  }
});

export default formStyles;
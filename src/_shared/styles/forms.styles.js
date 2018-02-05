import { StyleSheet } from 'aphrodite';

const screenSize = {
  desktop: '@media (min-width: 700px)',
};

const formStyles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%', 
    margin: '0 auto',
    padding: 18,
    border: '3px inset #FF8F00',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    [screenSize.desktop]:{
      width: '50%', 
    },
  },
  eventFormContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%', 
    margin: '0 auto',
    padding: 5,
    // backgroundColor: 'rgba(055, 072, 079, 0.90)',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    border: '3px inset #754148', //#0277BD
    borderRadius: 5,
    [screenSize.desktop]:{
      maxWidth: '45%', 
    },
  },
  guestListContainer: {
    display: 'flex',
    width: '95%', 
    margin: '0 auto',
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    border: '3px inset #0277BD',
    borderRadius: 5,
    [screenSize.desktop]:{
      width: '50%', 
    },
  },
  guestFormContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%', 
    margin: '0 auto',
    padding: 5,
    backgroundColor: 'rgba(055, 072, 079, 0.90)',
    border: '3px inset #754148', 
    borderRadius: 5,
    [screenSize.desktop]:{
      maxWidth: '45%', 
    },
  },
  input: {
    marginBottom: 5,
    [screenSize.desktop]:{
      width: '90%', 
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    [screenSize.desktop]:{
      flexWrap: 'none', 
    },
  },
  button: {
    
  }
});

export default formStyles;
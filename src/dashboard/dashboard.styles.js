import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1', //'#FAFAFA',
  },
  flexContainer: {
    display: 'flex',
    // alignContent: 'center',
    // media query for desktop - row
    // flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',

  },
  sectionHeader: {
    textAlign: 'center',
    font: 30,
  },
  eventName: {
    backgroundColor: '#DCEDC8',
    // color: '#1B5E20',
    padding: 5,
    textAlign: 'center',
  },
  date: {
    textAlign: 'center'
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    flexBasis: '33%',
  }
})

export default styles;
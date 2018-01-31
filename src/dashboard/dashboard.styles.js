import { StyleSheet } from 'aphrodite';

const screenSize = {
  desktop: '@media (min-width: 700px)',
  mobile: '@media (max-width: 700px)',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1', //'#FAFAFA',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [screenSize.mobile]:{
      flexDirection: 'column',
    }
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
    flexBasis: '40%',
  }
})

export default styles;
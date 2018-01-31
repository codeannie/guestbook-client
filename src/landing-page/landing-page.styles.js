import { StyleSheet } from 'aphrodite';

const screenSize = {
  desktop: '@media (min-width: 700px)',
};

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    backgroundColor: '#388E3C'
  },
  header1: {
    textAlign: 'center',
    fontSize: 32,
  },
  centerText: {
    textAlign: 'center',
  },
});

export default styles; 
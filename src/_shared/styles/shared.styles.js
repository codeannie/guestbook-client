import { StyleSheet } from 'aphrodite';

const sharedStyles = StyleSheet.create({
  headerFont: {
    fontFamily: 'Permanent Marker, cursive',
    textAlign: 'center',
  },
  bodyFont: {
    fontFamily:'Open Sans, sans-serif'
  },
  mainContainer: {
    padding: '1em',
  },
  lists: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
})

export default sharedStyles; 
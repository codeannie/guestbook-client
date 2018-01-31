import { StyleSheet } from 'aphrodite';

const screenSize = {
  desktop: '@media (min-width: 700px)',
  // smartphone: '@media only screen and (max-width: 479px)',
  // smartphoneLandscape: '@media only screen and (min-width: 480px) and (max-width: 767px)',
  // tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
  // desktop: '@media only screen and (min-width: 992px)',
}

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

// list: {
//   fontFamily:'Open Sans, sans-serif',
//   border: '1px dotted red',
//   display: 'inline-block',
//   margin: 'auto 0',
//   textAlign: 'center',
// }
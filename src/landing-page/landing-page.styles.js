import sharedStyles from '../_shared/styles/shared.styles';

const styles = {
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    padding: '1em'

  },
  header: {
    textAlign: 'center',
    fontFamily: sharedStyles.headerFont.fontFamily,
  },
  paragraph: {
    textAlign: 'center',
    fontFamily: sharedStyles.bodyFont,
    // fontSize: 14
  },
  list: {
    fontFamily:'Open Sans, sans-serif',
    display: 'inline-block',
    margin: 'auto 0',
    // textAlign: 'center',
    // marginRight: 'auto',
  }
}

export default styles; 
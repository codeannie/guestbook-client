import sharedStyles from '../_shared/styles/shared.styles';
import {
  lightBlue800, green700, green800, green900, amber800,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const styles = {
  container: {
    padding: '1em'

  },  
  flex: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    backgroundColor: green700
  },
  button: {
    alignSelf: 'flex-end',
    // border: '1px dotted red',
  },

  header1: {
    textAlign: 'center',
    fontFamily: sharedStyles.headerFont.fontFamily,
    fontSize: 32,
  },
  header2: {
    textAlign: 'center',
    fontFamily: sharedStyles.headerFont.fontFamily, 
  },
  paragraph: {
    textAlign: 'center',
    fontFamily: sharedStyles.bodyFont,
    // fontSize: 14
  },
}

export default styles; 
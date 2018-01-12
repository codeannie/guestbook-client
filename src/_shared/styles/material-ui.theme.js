import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  lightBlue800, green700, green800, green900, amber800,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: lightBlue800,
    primary2Color: green800,
    primary3Color: grey400,
    accent1Color: amber800,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: amber800,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

export default muiTheme;
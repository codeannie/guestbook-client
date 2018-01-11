import * as React from 'react';
import { addDecorator } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import muiTheme from './_shared/styling/material-ui.theme';

addDecorator(story => (
  <MuiThemeProvider>
    {story()}
  </MuiThemeProvider>
));
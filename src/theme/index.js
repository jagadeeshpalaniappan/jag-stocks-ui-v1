import { createMuiTheme, colors } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white,
      level1: colors.grey[100],
      level2: fade(colors.grey[100], 0.85)
      // level2: 'red'
    },
    primary: {
      main: colors.blue[800]
    },
    secondary: {
      main: colors.green[600]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  shadows,
  typography,
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: false //' disableRipple: true' will disable ripple effect
    }
  }
});

export default theme;

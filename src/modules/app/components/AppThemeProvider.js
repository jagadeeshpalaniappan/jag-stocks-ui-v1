import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import theme from '../theme';
import GlobalStyles from './GlobalStyles';

const AppThemeProvider = ({ children }) => {
  console.log('### AppThemeProvider:');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;

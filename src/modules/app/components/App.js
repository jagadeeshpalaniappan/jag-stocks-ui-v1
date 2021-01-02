import React from 'react';
import AppStateProvider from './AppStateProvider';
import AppRouteProvider from './AppRouteProvider';
import AppThemeProvider from './AppThemeProvider';
import AppContainer from './AppContainer';

const App = () => {
  console.log('### App:');
  return (
    <AppStateProvider>
      <AppRouteProvider>
        <AppThemeProvider>
          <AppContainer />
        </AppThemeProvider>
      </AppRouteProvider>
    </AppStateProvider>
  );
};

export default React.memo(App);

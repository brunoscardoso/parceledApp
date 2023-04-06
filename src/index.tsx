import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {PortalProvider} from '@gorhom/portal';

import Routes from './routes';
import colors from 'themes/colors';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <PortalProvider>
      <ThemeProvider theme={colors}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </PortalProvider>
  );
}

// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { TicketsProvider } from './context/TicketsContext';
import RootNavigator from './navigation/RootNavigator';
import { navTheme } from './theme';

export default function App() {
  return (
    <TicketsProvider>
      <NavigationContainer theme={navTheme}>
        <RootNavigator />
        <StatusBar style="light" />
      </NavigationContainer>
    </TicketsProvider>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationStack from './src/navigation/AppNavigation';
import {navigationRef} from './src/navigation/ServiceNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <ApplicationStack />
    </NavigationContainer>
  );
}

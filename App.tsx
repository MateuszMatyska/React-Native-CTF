import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationStack from './src/navigation/AppNavigation';
import {navigationRef} from './src/navigation/ServiceNavigation';

const App: React.FC<any> = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <ApplicationStack />
    </NavigationContainer>
  );
}

export default App

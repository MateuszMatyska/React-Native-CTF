import React, { useEffect } from 'react';
import { Linking } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import ApplicationStack from './src/navigation/AppNavigation';
import { navigationRef } from './src/navigation/ServiceNavigation';
import { handleUrl, handleUrlError } from './src/services/DeeplinkService'

const App: React.FC<any> = () => {

  useEffect(() => {
    Linking.getInitialURL().then((url: string | null) => {
      if (url) {
        Linking.canOpenURL(url).then((supported: boolean) => {
          if (supported) {
            handleUrl(url);
          }
        });
      }
    }).catch((e: string) => handleUrlError(e));

    Linking.addEventListener('url', (event) => {
      Linking.canOpenURL(event.url).then((supported) => {
        if (supported) {
          handleUrl(event.url);
        }
      }).catch((e: string) => handleUrlError(e));
    });
  }, [])


  return (
    <NavigationContainer ref={navigationRef}>
      <ApplicationStack />
    </NavigationContainer>
  );
}

export default App
